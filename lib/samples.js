// Pre-packaged realistic study note samples for instant hackathon demonstration

function svgToBase64(svgString) {
  if (typeof window !== "undefined") {
    return btoa(unescape(encodeURIComponent(svgString)));
  }
  return Buffer.from(svgString).toString("base64");
}

const biologySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="100%" height="100%" fill="#fffdfa"/>
  <!-- Notebook grid lines -->
  <defs>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <line x1="0" y1="24" x2="24" y2="24" stroke="#e8edf5" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <line x1="60" y1="0" x2="60" y2="600" stroke="#fecaca" stroke-width="1.5"/>

  <!-- Notes content -->
  <text x="80" y="50" font-family="'Segoe UI', 'Comic Sans MS', cursive, sans-serif" font-size="24" font-weight="bold" fill="#1e293b">🧬 Biology 101: DNA Replication Machinery</text>
  <text x="80" y="80" font-family="'Segoe UI', sans-serif" font-size="14" fill="#64748b">Date: Oct 2026 | Chapter 12 Notes</text>
  
  <rect x="80" y="100" width="660" height="2" fill="#3b82f6"/>
  
  <text x="90" y="130" font-family="'Segoe UI', cursive, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">Key Enzymes &amp; Functions:</text>
  
  <text x="110" y="160" font-family="'Segoe UI', cursive, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">Helicase:</tspan> Unwinds &amp; separates the parental double helix at replication fork.</text>
  <text x="110" y="190" font-family="'Segoe UI', cursive, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">Single-Strand Binding Proteins (SSBs):</tspan> Prevents single strands from re-annealing.</text>
  <text x="110" y="220" font-family="'Segoe UI', cursive, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">Primase:</tspan> Synthesizes short RNA primer (5' to 3') to provide free 3'-OH group.</text>
  <text x="110" y="250" font-family="'Segoe UI', cursive, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">DNA Polymerase III:</tspan> Primary enzyme elongating new DNA strand (reads 3' to 5', synthesizes 5' to 3').</text>
  <text x="110" y="280" font-family="'Segoe UI', cursive, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">DNA Polymerase I:</tspan> Removes RNA primers and replaces them with DNA nucleotides.</text>
  <text x="110" y="310" font-family="'Segoe UI', cursive, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">DNA Ligase:</tspan> Joins Okazaki fragments by sealing phosphodiester phosphodiester nicks.</text>

  <!-- Diagram section -->
  <rect x="90" y="340" width="640" height="180" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <text x="110" y="370" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="bold" fill="#0f172a">[Diagram: Replication Fork &amp; Okazaki Fragments]</text>
  
  <text x="110" y="405" font-family="'Segoe UI', sans-serif" font-size="14" fill="#475569">Leading Strand: Synthesized continuously toward replication fork (5' -> 3').</text>
  <text x="110" y="435" font-family="'Segoe UI', sans-serif" font-size="14" fill="#475569">Lagging Strand: Synthesized discontinuously away from fork as Okazaki fragments.</text>
  
  <rect x="110" y="460" width="220" height="40" rx="6" fill="#e0e7ff" stroke="#6366f1"/>
  <text x="120" y="485" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#312e81">Exam Tip: DNA Pol III needs 3'-OH!</text>

  <rect x="350" y="460" width="240" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/>
  <text x="360" y="485" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#92400e">Direction: Always reads 3'->5'</text>
</svg>`;

const calculusSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="100%" height="100%" fill="#fafafa"/>
  <defs>
    <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="0" y1="20" x2="20" y2="20" stroke="#f1f5f9" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid2)"/>
  
  <text x="60" y="55" font-family="'Segoe UI', sans-serif" font-size="26" font-weight="800" fill="#0f172a">📐 Calculus: Derivative Core Rules &amp; Formulas</text>
  <text x="60" y="85" font-family="'Segoe UI', sans-serif" font-size="14" fill="#64748b">Summary Sheet for Exam Prep</text>
  <line x1="60" y1="100" x2="740" y2="100" stroke="#0284c7" stroke-width="2"/>

  <!-- Rules -->
  <text x="70" y="140" font-family="'Segoe UI', sans-serif" font-size="16" font-weight="bold" fill="#0369a1">1. Power Rule:</text>
  <text x="90" y="170" font-family="Courier, monospace" font-size="16" fill="#1e293b">d/dx [x^n] = n * x^(n-1)</text>

  <text x="70" y="210" font-family="'Segoe UI', sans-serif" font-size="16" font-weight="bold" fill="#0369a1">2. Product Rule:</text>
  <text x="90" y="240" font-family="Courier, monospace" font-size="16" fill="#1e293b">d/dx [f(x) * g(x)] = f'(x)*g(x) + f(x)*g'(x)</text>

  <text x="70" y="280" font-family="'Segoe UI', sans-serif" font-size="16" font-weight="bold" fill="#0369a1">3. Quotient Rule:</text>
  <text x="90" y="310" font-family="Courier, monospace" font-size="16" fill="#1e293b">d/dx [f(x)/g(x)] = [f'(x)*g(x) - f(x)*g'(x)] / [g(x)]^2</text>

  <text x="70" y="350" font-family="'Segoe UI', sans-serif" font-size="16" font-weight="bold" fill="#0369a1">4. Chain Rule (Composite Functions):</text>
  <text x="90" y="380" font-family="Courier, monospace" font-size="16" fill="#1e293b">d/dx [f(g(x))] = f'(g(x)) * g'(x)</text>

  <rect x="70" y="420" width="670" height="120" rx="10" fill="#f0f9ff" stroke="#bae6fd"/>
  <text x="90" y="455" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#0284c7">Trigonometric Derivatives:</text>
  <text x="90" y="485" font-family="Courier, monospace" font-size="14" fill="#0f172a">• d/dx [sin(x)] = cos(x)      • d/dx [cos(x)] = -sin(x)</text>
  <text x="90" y="515" font-family="Courier, monospace" font-size="14" fill="#0f172a">• d/dx [tan(x)] = sec^2(x)    • d/dx [e^x] = e^x</text>
</svg>`;

const csSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="100%" height="100%" fill="#ffffff"/>
  <defs>
    <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="0" y1="20" x2="20" y2="20" stroke="#f8fafc" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid3)"/>
  
  <text x="60" y="55" font-family="'Segoe UI', sans-serif" font-size="24" font-weight="bold" fill="#0f172a">💻 Computer Science: Trees &amp; Search Complexities</text>
  <line x1="60" y1="80" x2="740" y2="80" stroke="#10b981" stroke-width="2"/>

  <text x="70" y="120" font-family="'Segoe UI', sans-serif" font-size="16" font-weight="bold" fill="#047857">1. Binary Search Tree (BST) Properties:</text>
  <text x="90" y="150" font-family="'Segoe UI', sans-serif" font-size="15" fill="#334155">• For every node X: all keys in Left Subtree &lt; X.key &lt; all keys in Right Subtree.</text>
  <text x="90" y="180" font-family="'Segoe UI', sans-serif" font-size="15" fill="#334155">• In-order traversal of a valid BST always yields keys in strictly sorted order.</text>

  <text x="70" y="230" font-family="'Segoe UI', sans-serif" font-size="16" font-weight="bold" fill="#047857">2. Time Complexities:</text>
  <text x="90" y="260" font-family="'Segoe UI', sans-serif" font-size="15" fill="#334155">• Balanced BST (AVL/Red-Black): Search, Insert, Delete = O(log n).</text>
  <text x="90" y="290" font-family="'Segoe UI', sans-serif" font-size="15" fill="#334155">• Degenerate / Skewed BST (linked list): Worst case = O(n).</text>
  <text x="90" y="320" font-family="'Segoe UI', sans-serif" font-size="15" fill="#334155">• Hash Table: Average lookup = O(1), Worst case (all collisions) = O(n).</text>

  <rect x="70" y="360" width="670" height="180" rx="8" fill="#f0fdf4" stroke="#86efac"/>
  <text x="90" y="395" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#15803d">Tree Traversals:</text>
  <text x="90" y="430" font-family="Courier, monospace" font-size="14" fill="#14532d">In-order:   Left -> Root -> Right   (sorted order)</text>
  <text x="90" y="465" font-family="Courier, monospace" font-size="14" fill="#14532d">Pre-order:  Root -> Left -> Right   (useful to serialize/clone tree)</text>
  <text x="90" y="500" font-family="Courier, monospace" font-size="14" fill="#14532d">Post-order: Left -> Right -> Root   (useful to delete tree / evaluate math expr)</text>
</svg>`;

export const SAMPLE_NOTES = [
  {
    id: "bio",
    title: "🧬 Biology: DNA Replication",
    subtitle: "Helicase, Polymerase & Replication Fork",
    mimeType: "image/svg+xml",
    getSvg: () => biologySvg,
    sampleQuestions: [
      {
        question: "What is the primary function of Helicase during DNA replication at the replication fork?",
        topic_tag: "Helicase & Unwinding",
        options: [
          "Unwinds and separates the parental double helix",
          "Synthesizes short RNA primers for DNA Polymerase",
          "Seals single-stranded phosphodiester nicks",
          "Replaces RNA primers with deoxyribonucleotides"
        ],
        answer: "Unwinds and separates the parental double helix",
        explanation: "Helicase breaks the hydrogen bonds between complementary bases to separate the two strands and form the replication fork."
      },
      {
        question: "Which enzyme is primarily responsible for synthesizing the leading strand and elongating Okazaki fragments (5' to 3')?",
        topic_tag: "DNA Polymerases",
        options: [
          "DNA Polymerase I",
          "DNA Polymerase III",
          "Primase",
          "DNA Ligase"
        ],
        answer: "DNA Polymerase III",
        explanation: "DNA Polymerase III performs the majority of elongation in prokaryotes, adding nucleotides in the 5' to 3' direction."
      },
      {
        question: "Why must the lagging strand be synthesized discontinuously in Okazaki fragments?",
        topic_tag: "Okazaki Fragments",
        options: [
          "DNA polymerase can only synthesize in the 5' to 3' direction away from the fork",
          "Primase cannot bind to single-stranded binding proteins",
          "Helicase only unwinds DNA in short bursts",
          "Topoisomerase blocks continuous synthesis on both strands"
        ],
        answer: "DNA polymerase can only synthesize in the 5' to 3' direction away from the fork",
        explanation: "Because DNA polymerases only add nucleotides to a free 3'-OH group (synthesizing 5'->3'), the lagging strand must be synthesized discontinuously away from the replication fork."
      },
      {
        question: "What crucial function does DNA Ligase perform at the completion of lagging strand synthesis?",
        topic_tag: "DNA Ligase",
        options: [
          "Synthesizes the initial RNA primer",
          "Seals the phosphodiester backbone between adjacent Okazaki fragments",
          "Exonuclease digestion of mismatched pyrimidines",
          "Stabilizes open single-stranded templates"
        ],
        answer: "Seals the phosphodiester backbone between adjacent Okazaki fragments",
        explanation: "DNA ligase catalyzes the formation of covalent phosphodiester bonds to join adjacent Okazaki fragments after RNA primers are replaced by DNA Pol I."
      },
      {
        question: "Why does DNA Polymerase require Primase to initiate synthesis rather than starting de novo?",
        topic_tag: "Primase & RNA Primers",
        options: [
          "DNA polymerase requires an existing 3'-OH group to add incoming nucleotides",
          "Primase provides the ATP needed for helicase activity",
          "DNA polymerase cannot recognize purine bases directly",
          "Primase hydrolyzes pyrophosphate to drive elongation"
        ],
        answer: "DNA polymerase requires an existing 3'-OH group to add incoming nucleotides",
        explanation: "DNA polymerases cannot initiate chain synthesis de novo; they require a pre-existing 3'-OH provided by an RNA primer laid down by primase."
      }
    ]
  },
  {
    id: "calc",
    title: "📐 Calculus: Derivative Rules",
    subtitle: "Chain Rule, Product & Quotient Rules",
    mimeType: "image/svg+xml",
    getSvg: () => calculusSvg,
    sampleQuestions: [
      {
        question: "According to the power rule, what is the derivative of f(x) = x^4?",
        topic_tag: "Power Rule",
        options: [
          "4x^3",
          "4x^4",
          "3x^4",
          "x^3"
        ],
        answer: "4x^3",
        explanation: "By the Power Rule d/dx [x^n] = n * x^(n-1), the derivative of x^4 is 4 * x^(4-1) = 4x^3."
      },
      {
        question: "What is the derivative of the product f(x) * g(x) according to the Product Rule?",
        topic_tag: "Product Rule",
        options: [
          "f'(x)*g(x) + f(x)*g'(x)",
          "f'(x) * g'(x)",
          "[f'(x)*g(x) - f(x)*g'(x)] / [g(x)]^2",
          "f'(g(x)) * g'(x)"
        ],
        answer: "f'(x)*g(x) + f(x)*g'(x)",
        explanation: "The Product Rule states that the derivative of a product is the derivative of the first times the second plus the first times the derivative of the second."
      },
      {
        question: "When applying the Chain Rule to f(g(x)), what is the resulting derivative formula?",
        topic_tag: "Chain Rule",
        options: [
          "f'(g(x)) * g'(x)",
          "f'(x) * g'(x)",
          "f(g'(x)) * g(x)",
          "[f'(x) + g'(x)] / 2"
        ],
        answer: "f'(g(x)) * g'(x)",
        explanation: "The Chain Rule differentiates composite functions by multiplying the derivative of the outer function evaluated at the inner function by the derivative of the inner function."
      },
      {
        question: "What is the derivative of tan(x) with respect to x?",
        topic_tag: "Trigonometric Derivatives",
        options: [
          "sec^2(x)",
          "-sec^2(x)",
          "cos(x)",
          "sec(x)tan(x)"
        ],
        answer: "sec^2(x)",
        explanation: "The derivative of tan(x) with respect to x is sec^2(x), derived from applying the quotient rule to sin(x)/cos(x)."
      },
      {
        question: "What is the derivative of the exponential function f(x) = e^x?",
        topic_tag: "Trigonometric Derivatives",
        options: [
          "e^x",
          "x * e^(x-1)",
          "ln(x)",
          "e^(x+1)"
        ],
        answer: "e^x",
        explanation: "The natural exponential function e^x is unique because its derivative is equal to the function itself: d/dx [e^x] = e^x."
      }
    ]
  },
  {
    id: "cs",
    title: "💻 CS: Binary Trees & Big-O",
    subtitle: "BST Properties, Traversals & Complexities",
    mimeType: "image/svg+xml",
    getSvg: () => csSvg,
    sampleQuestions: [
      {
        question: "Which invariant must hold true for every node X in a valid Binary Search Tree (BST)?",
        topic_tag: "Binary Search Tree Properties",
        options: [
          "Left subtree keys < X.key < Right subtree keys",
          "All nodes must have exactly two child nodes",
          "Left subtree height must equal right subtree height",
          "Root node must store the median value of all keys"
        ],
        answer: "Left subtree keys < X.key < Right subtree keys",
        explanation: "By definition, in a BST all elements in the left subtree of node X have keys strictly less than X.key, and all elements in the right subtree have keys strictly greater than X.key."
      },
      {
        question: "What is the worst-case search time complexity in a skewed/degenerate Binary Search Tree?",
        topic_tag: "Time Complexity",
        options: [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n log n)"
        ],
        answer: "O(n)",
        explanation: "When a BST degenerates into a linear linked list (e.g., keys inserted in strictly sorted order without rebalancing), searching degrades to O(n)."
      },
      {
        question: "Which tree traversal order visits nodes in strictly ascending sorted order on a valid BST?",
        topic_tag: "Tree Traversals",
        options: [
          "In-order traversal (Left -> Root -> Right)",
          "Pre-order traversal (Root -> Left -> Right)",
          "Post-order traversal (Left -> Right -> Root)",
          "Level-order traversal (Breadth First)"
        ],
        answer: "In-order traversal (Left -> Root -> Right)",
        explanation: "An in-order traversal recursively visits the left subtree, the current node, then the right subtree, producing elements in sorted order for a BST."
      },
      {
        question: "What is the average lookup time complexity in a standard Hash Table with a uniform hash distribution?",
        topic_tag: "Time Complexity",
        options: [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        answer: "O(1)",
        explanation: "With a good hash function that distributes keys uniformly across buckets, average case lookup is O(1) constant time."
      },
      {
        question: "Which traversal is especially suited for serializing/cloning a tree structure?",
        topic_tag: "Tree Traversals",
        options: [
          "Pre-order traversal (Root -> Left -> Right)",
          "Post-order traversal (Left -> Right -> Root)",
          "In-order traversal (Left -> Root -> Right)",
          "Reverse in-order traversal"
        ],
        answer: "Pre-order traversal (Root -> Left -> Right)",
        explanation: "Pre-order traversal visits the root before child subtrees, making it ideal for cloning or serializing because roots are reconstructed before their children."
      }
    ]
  },
];
