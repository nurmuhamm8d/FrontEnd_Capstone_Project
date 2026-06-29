import { NavLink } from 'react-router-dom';
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

export const Navigation = ({ compact = false }: NavigationProps) => (
  <nav className={styles.nav}>
    <ul>
      {NAV_ITEMS.map(({ label, id, Icon }) => (
        <li key={id}>
          <NavLink
            to={`/inner/${id}`}
            className={({ isActive }) =>
              [
                styles['nav__link'],
                isActive && styles['nav__link--active'],
                compact && styles['nav__link--compact'],
              ]
                .filter(Boolean)
                .join(' ')
            }
            title={compact ? label : undefined}
          >
            <Icon className={styles['nav__icon']} aria-hidden="true" />
            {!compact && <span className={styles['nav__label']}>{label}</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
