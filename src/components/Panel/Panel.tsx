import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '../Navigation/Navigation';
import { PhotoBox } from '../PhotoBox/PhotoBox';
import styles from './Panel.module.scss';

export interface PanelProps {
  name: string;
  title: string;
  avatar: string;
}

export const Panel = ({ name, title, avatar }: PanelProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      data-testid="panel"
      className={isOpen ? `${styles.panel} ${styles.open}` : styles.panel}
    >
      <button
        type="button"
        aria-label="Toggle navigation"
        className={styles.hamburger}
        onClick={() => setIsOpen((open) => !open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={styles.content}>
        <PhotoBox name={name} title={title} description="" avatar={avatar} />
        <Navigation />
      </div>
    </aside>
  );
};
