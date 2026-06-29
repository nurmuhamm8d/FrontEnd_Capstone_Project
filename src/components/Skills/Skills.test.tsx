import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

test('renders top-level skill bars and the scale labels', () => {
  render(<Skills data={[{ name: 'SCSS / CSS', range: 55 }]} />);
  expect(screen.getByText('SCSS / CSS')).toBeInTheDocument();
  ['Beginner', 'Proficient', 'Expert', 'Master'].forEach((label) =>
    expect(screen.getByText(label)).toBeInTheDocument()
  );
});

test('renders nested sub-skill bars when children are present', () => {
  render(
    <Skills
      data={[
        {
          name: 'React',
          range: 80,
          children: [{ name: 'Redux Toolkit', range: 65 }],
        },
      ]}
    />
  );
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('Redux Toolkit')).toBeInTheDocument();
});
