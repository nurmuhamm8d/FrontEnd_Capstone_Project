import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const NAV_ITEMS = [
  { label: 'About me', to: '/inner/about' },
  { label: 'Education', to: '/inner/education' },
  { label: 'Experience', to: '/inner/experience' },
  { label: 'Portfolio', to: '/inner/portfolio' },
  { label: 'Contacts', to: '/inner/contacts' },
  { label: 'Feedback', to: '/inner/feedback' },
];

export const Navigation = () => (
  <nav className={styles.nav}>
    <ul>
      {NAV_ITEMS.map(({ label, to }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
