export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  resourceUrl: string;
}

export const portfolioCategories = ['All', 'Web App', 'Bot', 'Tooling'] as const;

export const portfolioData: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'EPAM Courses App (Redux)',
    category: 'Web App',
    image: '/assets/images/portfolio-1.jpg',
    description:
      'Course catalog SPA built on the EPAM Tech Orda track: React + Redux Toolkit state, protected routes by user role, and a CRUD admin flow for managing courses.',
    resourceUrl: 'https://github.com/nurmuhamm8d',
  },
  {
    id: 'portfolio-2',
    title: 'Habit-tracker Telegram bot',
    category: 'Bot',
    image: '/assets/images/portfolio-2.jpg',
    description:
      'Personal Telegram bot with a SQLite backend that sends daily check-in reminders and tracks streaks for a handful of habits, built to learn bot APIs and background job scheduling.',
    resourceUrl: 'https://github.com/nurmuhamm8d',
  },
  {
    id: 'portfolio-3',
    title: 'Text-to-speech pipeline experiments',
    category: 'Tooling',
    image: '/assets/images/portfolio-3.jpg',
    description:
      'A set of voice-cloning and text-to-speech experiments comparing XTTS v2 and edge-tts pipelines, used to add automatic narration to development sessions.',
    resourceUrl: 'https://github.com/nurmuhamm8d',
  },
  {
    id: 'portfolio-4',
    title: 'This CV application',
    category: 'Web App',
    image: '/assets/images/portfolio-4.jpg',
    description:
      'The capstone project you are looking at right now: a responsive React + TypeScript single-page CV, built from a Figma design with shared, reusable components.',
    resourceUrl: 'https://github.com/nurmuhamm8d/FrontEnd_Capstone_Project',
  },
];
