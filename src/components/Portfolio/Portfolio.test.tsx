// @ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react';
import { Portfolio } from './Portfolio';
import { portfolioData } from '../../assets/data/portfolio';

test('shows all items by default and filters by category on tab click', () => {
  render(<Portfolio />);

  portfolioData.forEach((item) => {
    const el = screen.getByText(item.title).closest('li');
    expect(el).not.toHaveAttribute('aria-hidden', 'true');
  });

  fireEvent.click(screen.getByText('Bot'));

  portfolioData
    .filter((item) => item.category === 'Bot')
    .forEach((item) => {
      const el = screen.getByText(item.title).closest('li');
      expect(el).not.toHaveAttribute('aria-hidden', 'true');
    });

  portfolioData
    .filter((item) => item.category !== 'Bot')
    .forEach((item) => {
      const el = screen.getByText(item.title).closest('li');
      expect(el).toHaveAttribute('aria-hidden', 'true');
    });

  fireEvent.click(screen.getByText('All'));
  portfolioData.forEach((item) => {
    const el = screen.getByText(item.title).closest('li');
    expect(el).not.toHaveAttribute('aria-hidden', 'true');
  });
});
