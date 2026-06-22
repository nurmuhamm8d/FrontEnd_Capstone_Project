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
  expect(screen.getByText('Jane').closest('a')).toHaveAttribute('href', 'https://example.com');
});
