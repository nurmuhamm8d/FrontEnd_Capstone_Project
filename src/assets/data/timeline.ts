export interface TimeLineItem {
  date: number;
  title: string;
  text: string;
}

export const educationData: TimeLineItem[] = [
  {
    date: 2026,
    title: 'EPAM University — Generative AI Fundamentals',
    text: 'Course covering core LLM concepts: tokens, prompts, model parameters and benchmarks, retrieval-augmented generation (RAG), plugin-based capability extension, and the security/privacy limitations of language models — knowledge now folded back into day-to-day AI-assisted development workflows and tooling decisions.',
  },
  {
    date: 2025,
    title: 'EPAM University — Advanced JavaScript & TypeScript Patterns',
    text: "In-depth study of modern JavaScript runtime behaviour — event loop mechanics, microtask/macrotask queues, memory management, and garbage collection — alongside practical TypeScript: advanced type inference, conditional types, mapped types, and declaration merging. Applied directly to improving the architecture of the capstone project's Redux slices and custom hooks.",
  },
  {
    date: 2024,
    title: 'EPAM Tech Orda — Front-end Development with AI Tools',
    text: 'Intensive front-end track covering HTML/CSS, JavaScript, TypeScript, React, Redux Toolkit, testing with Jest, and AI-assisted development workflows. Weekly graded assignments built up from static markup to a full Redux-driven SPA with routing and protected pages, culminating in this capstone CV project as the final deliverable. Emphasis on meeting Figma-spec pixel accuracy and writing maintainable, tested component code.',
  },
  {
    date: 2023,
    title: 'Self-directed study — Web fundamentals',
    text: 'Independent study of HTML, CSS, and JavaScript fundamentals before joining the EPAM track: semantic markup, the box model and flexbox/grid layout, DOM manipulation, and enough vanilla JavaScript to build small interactive pages without a framework. Supplemented with Git version control basics, responsive design principles, and browser DevTools profiling techniques.',
  },
  {
    date: 2022,
    title: 'Online courses — Python & data scripting',
    text: 'Completed Python for automation and data processing via structured online courses (Coursera and YouTube-based playlists). Topics included file I/O, regular expressions, requests library for HTTP automation, pandas for tabular data, and SQLite as a lightweight embedded database. Projects included a CSV report generator and a web-scraping pipeline that seeded the habit-tracker database used in later Telegram bot experiments.',
  },
];
