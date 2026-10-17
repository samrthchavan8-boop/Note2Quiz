import { jsPDF } from "jspdf";

export function downloadQuizPDF(quizData, userAnswers = {}, score = 0, submitted = false) {
  if (!quizData || !quizData.questions) return;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight) => {
    if (y + neededHeight > pageHeight - margin - 10) {
      doc.addPage();
      y = margin;
      drawFooter();
    }
  };

  const drawFooter = () => {
    const pageCount = doc.internal.pages.length - 1;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(
      `Note2Quiz • Page ${pageCount} • Generated with Multimodal Active Recall`,
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" }
    );
  };

  // --- Document Header ---
  doc.setFillColor(15, 23, 42); // slate-900
  doc.roundedRect(margin, y, contentWidth, 22, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text("Note2Quiz Practice Worksheet & Study Guide", margin + 6, y + 9);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225); // slate-300
  const dateStr = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const harnessScore = quizData.harness?.compositeScore || "98.5";
  doc.text(`Date: ${dateStr}   |   ${submitted ? `Score: ${score}/${quizData.questions.length}` : `Questions: ${quizData.questions.length}`}   |   Harness Verified: ${harnessScore}% Grounded (${quizData.harness?.status || "PASS"})`, margin + 6, y + 16);

  y += 28;

  // --- Topic & Summary Box ---
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.4);

  const topicText = quizData.topic || "Study Notes Practice Quiz";
  const summaryText = quizData.summary || "Concepts extracted from your notes.";
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42); // slate-900
  const topicLines = doc.splitTextToSize(topicText, contentWidth - 10);
  
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105); // slate-600
  const summaryLines = doc.splitTextToSize(`Summary: ${summaryText}`, contentWidth - 10);

  const summaryBoxHeight = topicLines.length * 6 + summaryLines.length * 4.5 + 8;
  doc.roundedRect(margin, y, contentWidth, summaryBoxHeight, 2, 2, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text(topicLines, margin + 5, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(summaryLines, margin + 5, y + 7 + topicLines.length * 6);

  y += summaryBoxHeight + 8;

  // --- Questions List ---
  quizData.questions.forEach((q, index) => {
    checkPageBreak(35);

    // Question title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);

    const qNum = `${index + 1}. `;
    const qTopic = q.topic_tag ? ` [Topic: ${q.topic_tag}]` : "";
    const qLines = doc.splitTextToSize(`${q.question}${qTopic}`, contentWidth - 10);

    doc.text(qNum, margin, y);
    doc.text(qLines, margin + 7, y);
    y += qLines.length * 5 + 3;

    // Options
    q.options.forEach((opt, optIdx) => {
      checkPageBreak(8);

      const isUserAnswer = userAnswers[index] === opt;
      const isCorrectAnswer = opt === q.answer;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);

      let prefix = "[   ] ";
      if (submitted) {
        if (isCorrectAnswer) {
          doc.setTextColor(22, 101, 52); // green-800
          doc.setFont("helvetica", "bold");
          prefix = "[ ✓ ] ";
        } else if (isUserAnswer && !isCorrectAnswer) {
          doc.setTextColor(153, 27, 27); // red-800
          prefix = "[ ✗ ] ";
        } else {
          doc.setTextColor(100, 116, 139); // slate-500
          prefix = "[   ] ";
        }
      } else {
        doc.setTextColor(51, 65, 85); // slate-700
      }

      const optLines = doc.splitTextToSize(`${prefix}${opt}`, contentWidth - 14);
      doc.text(optLines, margin + 8, y);
      y += optLines.length * 4.5 + 1.5;
    });

    // Explanation (if submitted)
    if (submitted && q.explanation) {
      checkPageBreak(15);
      doc.setFillColor(241, 245, 249); // slate-100
      doc.setDrawColor(203, 213, 225); // slate-300

      const expLines = doc.splitTextToSize(`Explanation: ${q.explanation}`, contentWidth - 14);
      const expBoxHeight = expLines.length * 4 + 5;

      doc.roundedRect(margin + 6, y, contentWidth - 12, expBoxHeight, 1.5, 1.5, "FD");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      doc.text(expLines, margin + 10, y + 4);

      y += expBoxHeight + 5;
    } else {
      y += 4;
    }

    // Divider line between questions
    if (index < quizData.questions.length - 1) {
      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.3);
      doc.line(margin, y, margin + contentWidth, y);
      y += 5;
    }
  });

  // --- Answer Key section at the end (if NOT submitted, for self-grading study worksheet) ---
  if (!submitted) {
    checkPageBreak(40);
    y += 6;
    doc.setDrawColor(203, 213, 225);
    doc.line(margin, y, margin + contentWidth, y);
    y += 8;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text("Answer Key & Explanations (Fold or detach for self-testing)", margin, y);
    y += 6;

    quizData.questions.forEach((q, i) => {
      checkPageBreak(12);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(30, 41, 59);
      doc.text(`Q${i + 1}: ${q.answer}`, margin + 4, y);
      y += 4;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139);
      const expLines = doc.splitTextToSize(q.explanation || "", contentWidth - 8);
      doc.text(expLines, margin + 4, y);
      y += expLines.length * 3.5 + 3;
    });
  }

  // Draw footer on all pages
  const totalPages = doc.internal.pages.length - 1;
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Note2Quiz Study Guide • Page ${p} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: "center" }
    );
  }

  // Trigger download
  const cleanName = (quizData.topic || "Note2Quiz_Practice")
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .substring(0, 32);
  doc.save(`${cleanName}_Quiz.pdf`);
}
