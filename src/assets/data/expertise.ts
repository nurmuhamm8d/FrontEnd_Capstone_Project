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
        'Building production-style React/TypeScript applications, practicing component architecture, routing, and state management as part of an intensive front-end track.',
    },
  },
  {
    date: '2023 — 2024',
    info: {
      company: 'Independent projects',
      job: 'Automation & AI tooling',
      description:
        'Built and maintained personal automation tools and AI-assisted workflows, including a Telegram bot with a PostgreSQL backend and experiments with text-to-speech pipelines.',
    },
  },
];
