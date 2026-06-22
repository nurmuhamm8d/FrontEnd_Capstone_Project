import { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';

const NAV_ITEMS = [
  { label: 'About me', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contacts', id: 'contacts' },
  { label: 'Feedback', id: 'feedback' },
];

export const Navigation = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        {NAV_ITEMS.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={id === activeId ? `${styles.link} ${styles.active}` : styles.link}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
