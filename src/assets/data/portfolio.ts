export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const portfolioCategories = ['All', 'Web App', 'Bot', 'Tooling'] as const;

export const portfolioData: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'EPAM Courses App (Redux)',
    category: 'Web App',
    image: '/assets/images/portfolio-1.jpg',
  },
  {
    id: 'portfolio-2',
    title: 'Partner Bot — Telegram automation',
    category: 'Bot',
    image: '/assets/images/portfolio-2.jpg',
  },
  {
    id: 'portfolio-3',
    title: 'Text-to-speech pipeline experiments',
    category: 'Tooling',
    image: '/assets/images/portfolio-3.jpg',
  },
  {
    id: 'portfolio-4',
    title: 'This CV application',
    category: 'Web App',
    image: '/assets/images/portfolio-4.jpg',
  },
];
