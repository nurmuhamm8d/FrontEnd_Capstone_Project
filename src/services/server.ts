import { createServer, Response } from 'miragejs';
import { educationData } from '../assets/data/timeline';
import { skillsData, SkillItem } from '../assets/data/skills';

export interface EducationApiItem {
  date: number;
  title: string;
  description: string;
}

export interface SkillApiItem {
  name: string;
  range: number;
}

const flattenSkills = (items: SkillItem[]): SkillApiItem[] =>
  items.flatMap(({ name, range, children }) => [
    { name, range },
    ...(children ? flattenSkills(children) : []),
  ]);

export const buildSeedData = () => ({
  educations: educationData.map(({ date, title, text }) => ({
    date,
    title,
    description: text,
  })),
  skills: flattenSkills(skillsData),
});

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    seeds(server) {
      server.db.loadData(buildSeedData());
    },
    routes() {
      this.namespace = 'api';
      const timing = environment === 'test' ? 0 : 3000;

      this.get('/educations', (schema) => schema.db.educations, { timing });

      this.get('/skills', (schema) => schema.db.skills, { timing });

      this.post('/skills', (schema, request) => {
        const attrs = JSON.parse(request.requestBody) as Partial<SkillApiItem>;
        if (!attrs.name || typeof attrs.range !== 'number') {
          return new Response(422, {}, { error: 'Skill name and range are required' });
        }
        return schema.db.skills.insert({ name: attrs.name, range: attrs.range });
      });
    },
  });
}
