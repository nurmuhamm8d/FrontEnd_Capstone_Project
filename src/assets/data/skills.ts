export interface SkillItem {
  name: string;
  range: number;
  children?: SkillItem[];
}

export const skillsData: SkillItem[] = [
  { name: 'JavaScript / TypeScript', range: 90 },
  {
    name: 'React',
    range: 80,
    children: [{ name: 'Redux Toolkit', range: 65 }],
  },
  { name: 'SCSS / CSS', range: 55 },
  { name: 'Node.js', range: 35 },
];
