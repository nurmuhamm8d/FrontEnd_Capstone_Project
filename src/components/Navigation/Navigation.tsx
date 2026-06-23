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
        {NAV_ITEMS.map(({ label, id, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={id === activeId ? `${styles.link} ${styles.active}` : styles.link}
            >
              <Icon className={styles.icon} aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
