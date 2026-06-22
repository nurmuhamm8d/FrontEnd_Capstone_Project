import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '../Navigation/Navigation';
import { Button } from '../Button/Button';
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
      <div
        className={styles.hamburger}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Button icon={faBars} text="" />
      </div>
      <div className={styles.content}>
        <PhotoBox name={name} title={title} description="" avatar={avatar} />
        <Navigation />
      </div>
    </aside>
  );
};
