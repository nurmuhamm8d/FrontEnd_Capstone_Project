import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

const mockSectionTop = (id: string, top: number) => {
  const section = document.getElementById(id) ?? document.createElement('section');
  section.id = id;
  if (!section.parentNode) {
    document.body.appendChild(section);
  }
  section.getBoundingClientRect = () => ({ top } as DOMRect);
  return section;
};

afterEach(() => {
  document.body.innerHTML = '';
});

test('renders all seven section links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  ['About me', 'Education', 'Experience', 'Skills', 'Portfolio', 'Contacts', 'Feedback'].forEach(
    (label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  );
});

test('defaults to the first section as active on mount', () => {
  mockSectionTop('about', 0);
  mockSectionTop('education', 600);

  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  expect(screen.getByText('About me').closest('a')?.className).toMatch(/active/);
  expect(screen.getByText('Education').closest('a')?.className).not.toMatch(/active/);
});

test('marks the link active once its section scrolls past the trigger line', () => {
  mockSectionTop('about', -500);
  mockSectionTop('education', 50);

  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });

  expect(screen.getByText('Education').closest('a')?.className).toMatch(/active/);
});

test('keeps the previous section active while the next one is still below the trigger line', () => {
  mockSectionTop('about', 0);
  mockSectionTop('education', 300);

  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });

  expect(screen.getByText('About me').closest('a')?.className).toMatch(/active/);
  expect(screen.getByText('Education').closest('a')?.className).not.toMatch(/active/);
});
