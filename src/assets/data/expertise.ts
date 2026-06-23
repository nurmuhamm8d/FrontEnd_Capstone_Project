export interface ExpertiseItem {
  date: string;
  info: {
    company: string;
    job: string;
    description: string;
  };
}

export const expertiseData: ExpertiseItem[] = [
  {
    date: '2024 — present',
    info: {
      company: 'EPAM Systems (Tech Orda track)',
      job: 'Front-end Developer (in training)',
      description:
        'Building production-style React/TypeScript applications, practicing component architecture, routing, and state management with Redux Toolkit as part of an intensive front-end track. Each weekly assignment is reviewed against a Figma design and a fixed set of grading criteria, which keeps the focus on shipping code that actually matches spec, not just code that runs.',
    },
  },
  {
    date: '2023 — 2024',
    info: {
      company: 'Independent projects',
      job: 'Automation & AI tooling',
      description:
        'Built and maintained personal automation tools and AI-assisted workflows, including a habit-tracker Telegram bot with a SQLite backend, and a series of text-to-speech and voice-cloning pipeline experiments comparing XTTS v2 against edge-tts for narrating development sessions.',
    },
  },
];
