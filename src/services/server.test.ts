// @ts-nocheck
import { Server } from 'miragejs';
import { makeServer, buildSeedData } from './server';

let server: Server;

beforeEach(() => {
  server = makeServer({ environment: 'test' });
  server.db.loadData(buildSeedData());
});

afterEach(() => {
  server.shutdown();
});

test('GET /api/educations returns the seeded education entries', async () => {
  const response = await fetch('/api/educations');
  const data = await response.json();

  expect(response.ok).toBe(true);
  expect(data.length).toBeGreaterThan(0);
  expect(data[0]).toHaveProperty('description');
});

test('GET /api/skills returns a flat list with no nested children', async () => {
  const response = await fetch('/api/skills');
  const data = await response.json();

  expect(response.ok).toBe(true);
  expect(data.some((skill: { name: string }) => skill.name === 'Redux Toolkit')).toBe(true);
  data.forEach((skill: Record<string, unknown>) => expect(skill.children).toBeUndefined());
});

test('POST /api/skills creates a new skill', async () => {
  const response = await fetch('/api/skills', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'GraphQL', range: 70 }),
  });
  const created = await response.json();

  expect(response.ok).toBe(true);
  expect(created).toMatchObject({ name: 'GraphQL', range: 70 });
});

test('POST /api/skills rejects a payload missing required fields', async () => {
  const response = await fetch('/api/skills', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '' }),
  });

  expect(response.status).toBe(422);
});

test('the default (non-test) environment auto-seeds the db on construction', () => {
  const devServer = makeServer();
  expect(devServer.schema.db.educations.length).toBeGreaterThan(0);
  expect(devServer.schema.db.skills.length).toBeGreaterThan(0);
  devServer.shutdown();
});
