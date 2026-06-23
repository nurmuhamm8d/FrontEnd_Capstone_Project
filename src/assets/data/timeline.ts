export interface TimeLineItem {
  date: number;
  title: string;
  text: string;
}

export const educationData: TimeLineItem[] = [
  {
    date: 2026,
    title: 'EPAM University — Generative AI Fundamentals',
    text: 'Course covering core LLM concepts: tokens, prompts, model parameters and benchmarks, retrieval-augmented generation (RAG), plugin-based capability extension, and the security/privacy limitations of language models — knowledge now folded back into day-to-day AI-assisted development.',
  },
  {
    date: 2024,
    title: 'EPAM Tech Orda — Front-end Development with AI Tools',
    text: 'Intensive front-end track covering HTML/CSS, JavaScript, TypeScript, React, Redux Toolkit, testing with Jest, and AI-assisted development workflows. Weekly graded assignments built up from static markup to a full Redux-driven SPA with routing and protected pages, culminating in this capstone CV project as the final deliverable.',
  },
  {
    date: 2023,
    title: 'Self-directed study — Web fundamentals',
    text: 'Independent study of HTML, CSS, and JavaScript fundamentals before joining the EPAM track: semantic markup, the box model and flexbox/grid layout, DOM manipulation, and enough vanilla JavaScript to build small interactive pages without a framework.',
  },
];
