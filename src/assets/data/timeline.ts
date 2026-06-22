export interface TimeLineItem {
  date: number;
  title: string;
  text: string;
}

export const educationData: TimeLineItem[] = [
  {
    date: 2024,
    title: 'EPAM Tech Orda — Front-end Development with AI Tools',
    text: 'Intensive front-end track covering HTML/CSS, JavaScript, TypeScript, React, Redux, testing, and AI-assisted development tools, culminating in this capstone project.',
  },
  {
    date: 2023,
    title: 'Self-directed study — Web fundamentals',
    text: 'Independent study of HTML, CSS, and JavaScript fundamentals before joining the EPAM track.',
  },
];
