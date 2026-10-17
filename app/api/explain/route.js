import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const {
      question,
      options,
      answer,
      explanation,
      userAnswer,
      topic = "Study Notes",
      topic_tag = "Concept",
      summary = "",
      imageBase64,
      mimeType,
    } = await req.json();

    if (!question || !answer) {
      return NextResponse.json(
        { error: "Question and correct answer are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    let aiExplanation = null;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ API KEY });

        const promptText = `You are a warm, encouraging, and brilliant AI Tutor who specializes in Explain Like I'm 5 (ELI5) explanations for students.
The student just took a practice quiz generated from their study notes.

Context from Study Notes:
- Subject / Main Topic: ${topic}
- Subtopic Tested: ${topic_tag}
${summary ? `- Notes Summary: ${summary}` : ""}

Question:
"${question}"

Available Choices:
${options && Array.isArray(options) ? options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join("\n") : `Correct Answer: ${answer}`}

Correct Answer:
"${answer}"

${explanation ? `Existing technical explanation: "${explanation}"` : ""}
${userAnswer && userAnswer !== answer ? `The student picked: "${userAnswer}" (which was incorrect). Gently clear up the confusion without making them feel bad.` : ""}

Task:
Provide a simple, kid-friendly explanation (ELI5) of why "${answer}" is the correct answer based on the notes and diagrams.
Use an intuitive, fun everyday analogy (like legos, toy trains, kitchen cooking, superheroes, sports, or backpacks) that makes the concept instantly click.

Respond STRICTLY in valid JSON matching this schema:
{
  "analogy": "A short, vivid real-world analogy (1-2 sentences) that makes the concept click immediately.",
  "eli5": "Simple, kid-friendly explanation in plain English (2-3 sentences) explaining why this answer is right based on the notes.",
  "takeaway": "A short, catchy 1-line rule or mnemonic to easily remember this on a test."
}`;

        const modelsToTry = [
          "gemini-3.8-flash",
          "gemini-flash-latest",
          "gemma-4-26b-a4b-it",
          "gemma-4-31b-it",
        ];

        for (const model of modelsToTry) {
          try {
            const contents = [];
            if (imageBase64 && mimeType) {
              contents.push({
                inlineData: {
                  data: imageBase64,
                  mimeType,
                },
              });
            }
            contents.push({ text: promptText });

            const response = await ai.models.generateContent({
              model,
              contents,
              config: {
                responseMimeType: "application/json",
                temperature: 0.3,
              },
            });

            let rawText = response.text ? response.text.trim() : "";
            if (rawText.startsWith("```json")) {
              rawText = rawText.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
            } else if (rawText.startsWith("```")) {
              rawText = rawText.replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
            }

            const parsed = JSON.parse(rawText);
            if (parsed && (parsed.eli5 || parsed.explanation)) {
              aiExplanation = {
                analogy: parsed.analogy || "Think of this concept like puzzle pieces that only fit together in one specific way.",
                eli5: parsed.eli5 || parsed.explanation,
                takeaway: parsed.takeaway || `Remember: For ${topic_tag}, the answer is ${answer}.`,
                topic_tag,
                modelUsed: model,
              };
              break;
            }
          } catch (modelErr) {
            console.warn(`AI Tutor model ${model} attempt failed:`, modelErr.message || modelErr);
          }
        }
      } catch (genErr) {
        console.warn("AI Tutor generation error:", genErr.message || genErr);
      }
    }

    // High quality deterministic fallback if API is unavailable
    if (!aiExplanation) {
      aiExplanation = {
        analogy: `Imagine ${topic_tag || "this concept"} is like a specialized team where each member has one specific superpower.`,
        eli5: explanation
          ? `${explanation} In simple terms: ${answer} is the exact key that unlocks this question based on the notes.`
          : `Based on your study notes for ${topic}, "${answer}" is the correct match because it directly performs the required role in ${topic_tag || "this process"}.`,
        takeaway: `💡 Quick Rule: Keep an eye out for "${answer}" whenever ${topic_tag || "this topic"} is mentioned!`,
        topic_tag,
        modelUsed: "offline-tutor-fallback",
      };
    }

    return NextResponse.json(aiExplanation);
  } catch (err) {
    console.error("Explain route error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to generate explanation" },
      { status: 500 }
    );
  }
}
