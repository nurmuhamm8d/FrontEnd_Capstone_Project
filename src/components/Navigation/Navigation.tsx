import { useEffect, useState } from 'react';
import { AboutIcon } from '../../assets/icons/nav/about';
import { EducationIcon } from '../../assets/icons/nav/education';
import { ExperienceIcon } from '../../assets/icons/nav/experience';
import { SkillsIcon } from '../../assets/icons/nav/skills';
import { PortfolioIcon } from '../../assets/icons/nav/portfolio';
import { ContactsNavIcon } from '../../assets/icons/nav/contacts';
import { FeedbacksIcon } from '../../assets/icons/nav/feedbacks';
import styles from './Navigation.module.scss';

const NAV_ITEMS = [
  { label: 'About me', id: 'about', Icon: AboutIcon },
  { label: 'Education', id: 'education', Icon: EducationIcon },
  { label: 'Experience', id: 'experience', Icon: ExperienceIcon },
  { label: 'Skills', id: 'skills', Icon: SkillsIcon },
  { label: 'Portfolio', id: 'portfolio', Icon: PortfolioIcon },
  { label: 'Contacts', id: 'contacts', Icon: ContactsNavIcon },
  { label: 'Feedback', id: 'feedback', Icon: FeedbacksIcon },
];

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
      const triggerLine = 120;
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isScrollable = docHeight > window.innerHeight + 100;

      if (isScrollable && docHeight - scrollBottom < 8) {
        setActiveId(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      let current = NAV_ITEMS[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top - triggerLine <= 0) {
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
    <nav className={styles.nav}>
      <ul>
        {NAV_ITEMS.map(({ label, id, Icon }) => {
          const linkClass = [
            styles['nav__link'],
            id === activeId && styles['nav__link--active'],
            compact && styles['nav__link--compact'],
          ]
            .filter(Boolean)
            .join(' ');
          return (
            <li key={id}>
              <a href={`#${id}`} className={linkClass} title={compact ? label : undefined}>
                <Icon className={styles['nav__icon']} aria-hidden="true" />
                {!compact && <span className={styles['nav__label']}>{label}</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
