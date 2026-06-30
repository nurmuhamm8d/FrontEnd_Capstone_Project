import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faGem,
  faSuitcase,
  faPhone,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './Navigation.module.scss';

const NAV_ITEMS: { label: string; id: string; icon: IconDefinition }[] = [
  { label: 'About me', id: 'about', icon: faUser },
  { label: 'Education', id: 'education', icon: faGraduationCap },
  { label: 'Experience', id: 'experience', icon: faBriefcase },
  { label: 'Skills', id: 'skills', icon: faGem },
  { label: 'Portfolio', id: 'portfolio', icon: faSuitcase },
  { label: 'Contacts', id: 'contacts', icon: faPhone },
  { label: 'Feedback', id: 'feedback', icon: faComment },
];

const TRIGGER_LINE = 120;
const SCROLL_END_TOLERANCE = 100;
const SCROLL_END_OFFSET = 8;

export interface NavigationProps {
  compact?: boolean;
}

export const Navigation = ({ compact = false }: NavigationProps) => {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const handleScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isScrollable = docHeight > window.innerHeight + SCROLL_END_TOLERANCE;

      if (isScrollable && docHeight - scrollBottom < SCROLL_END_OFFSET) {
        setActiveId(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      let current = NAV_ITEMS[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top - TRIGGER_LINE <= 0) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul>
        {NAV_ITEMS.map(({ label, id, icon }) => {
          const linkClass = [
            styles['nav__link'],
            id === activeId && styles['nav__link--active'],
            compact && styles['nav__link--compact'],
          ]
            .filter(Boolean)
            .join(' ');
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClass}
                title={compact ? label : undefined}
                aria-current={id === activeId ? 'location' : undefined}
              >
                <FontAwesomeIcon icon={icon} className={styles['nav__icon']} aria-hidden="true" fixedWidth />
                {!compact && <span className={styles['nav__label']}>{label}</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
