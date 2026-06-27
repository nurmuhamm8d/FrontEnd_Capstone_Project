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
        'Building production-style React and TypeScript applications on an intensive graded track, covering component architecture, client-side routing with React Router, and global state management with Redux Toolkit. Each weekly assignment is reviewed against a Figma design and a fixed set of grading criteria — keeping the focus on shipping code that actually matches spec, not just code that compiles. The capstone project (this CV app) brings together Redux Toolkit, a Mirage JS mock server, Formik validation, and a Jest test suite with a coverage threshold enforced on every push via a Husky pre-push hook.',
    },
  },
  {
    date: '2023 — 2024',
    info: {
      company: 'Independent projects',
      job: 'Automation & AI tooling',
      description:
        'Designed and maintained a suite of personal automation tools to reduce repetitive overhead in daily development workflows. Built a habit-tracker Telegram bot with a SQLite backend and cron-based daily reminders, learning background job scheduling, webhook routing, and persistent state management outside the browser. In parallel, ran text-to-speech and voice-cloning experiments — comparing XTTS v2 against edge-tts, building a chunking and post-processing pipeline, and scripting automatic narration of development session logs.',
    },
  },
  {
    date: '2022 — 2023',
    info: {
      company: 'Self-directed learning',
      job: 'Web fundamentals & tooling',
      description:
        'Completed a structured self-study curriculum covering HTML5 semantic markup, CSS layout (flexbox and CSS Grid), vanilla JavaScript DOM manipulation, and the browser event model. Built progressively complex static and interactive pages — from pixel-accurate recreations of design mockups to a live-filtering data table driven by a local JSON dataset. Set up a Node.js development environment, learned Git version control, and started contributing small fixes to open-source projects to practise reading unfamiliar codebases.',
    },
  },
  {
    date: '2021 — 2022',
    info: {
      company: 'Personal & freelance',
      job: 'Python scripting & data processing',
      description:
        'Applied Python to data-wrangling tasks: scraping publicly available datasets with requests and BeautifulSoup, cleaning and transforming records with pandas, and generating summary reports as CSV and PDF. Wrote several small command-line utilities — a directory deduplicator, a batch image resizer, and a config-driven report generator — building habits of structuring code for reuse and documenting edge cases before they become production bugs.',
    },
  },
  {
    date: '2020 — 2021',
    info: {
      company: 'University project teams',
      job: 'Technical contributor',
      description:
        'Contributed as a technical member on several student project teams, from a web portal for a campus club to a data analysis dashboard for a course assignment. Gained early exposure to collaborative version control (branching strategies, pull request reviews), task division, and the importance of writing clear READMEs and deployment guides so that teammates can reproduce the environment independently. These projects established the habit of treating documentation as a first-class deliverable.',
    },
  },
];
