import { render, screen } from '@testing-library/react';
import { Expertise } from './Expertise';

test('renders each expertise entry', () => {
  render(
    <Expertise
      data={[
        { date: '2020', info: { company: 'Google', job: 'Dev', description: 'Built things' } },
      ]}
    />
  );
  expect(screen.getByText('2020')).toBeInTheDocument();
  expect(screen.getByText('Google')).toBeInTheDocument();
  expect(screen.getByText('Dev')).toBeInTheDocument();
  expect(screen.getByText('Built things')).toBeInTheDocument();
});
