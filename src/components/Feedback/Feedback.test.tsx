import { render, screen } from '@testing-library/react';
import { Feedback } from './Feedback';

test('renders each feedback entry', () => {
  render(
    <Feedback
      data={[
        {
          feedback: 'Great work',
          reporter: { photoUrl: '/r.jpg', name: 'Jane', citeUrl: 'https://example.com' },
        },
      ]}
    />
  );
  expect(screen.getByText(/Great work/)).toBeInTheDocument();
  expect(screen.getByText('Jane')).toBeInTheDocument();
  expect(screen.getByText('example.com').closest('a')).toHaveAttribute(
    'href',
    'https://example.com'
  );
});

test('falls back to the raw string when citeUrl is not a valid URL, shows the role when present', () => {
  render(
    <Feedback
      data={[
        {
          feedback: 'Solid mentor',
          reporter: { photoUrl: '/r.jpg', name: 'Bob', role: 'CTO', citeUrl: 'not-a-url' },
        },
      ]}
    />
  );
  expect(screen.getByText(/CTO,/)).toBeInTheDocument();
  expect(screen.getByText('not-a-url')).toBeInTheDocument();
});
