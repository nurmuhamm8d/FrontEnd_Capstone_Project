import { render, screen } from '@testing-library/react';
import { TimeLine } from './TimeLine';

test('renders each timeline entry sorted as given', () => {
  render(
    <TimeLine
      data={[
        { date: 2001, title: 'Title 0', text: 'Text 0' },
        { date: 2000, title: 'Title 1', text: 'Text 1' },
      ]}
    />
  );
  expect(screen.getByText('2001')).toBeInTheDocument();
  expect(screen.getByText('Title 0')).toBeInTheDocument();
  expect(screen.getByText('2000')).toBeInTheDocument();
  expect(screen.getByText('Title 1')).toBeInTheDocument();
});
