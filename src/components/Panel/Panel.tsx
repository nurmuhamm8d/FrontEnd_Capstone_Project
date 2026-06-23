import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '../Navigation/Navigation';
import { PhotoBox } from '../PhotoBox/PhotoBox';
import { GoBackIcon } from '../../assets/icons/nav/go-back';
import styles from './Panel.module.scss';

export interface PanelProps {
  name: string;
  title: string;
  avatar: string;
}

const isDesktopViewport = () =>
  typeof window !== 'undefined' && window.innerWidth > 599;

export const Panel = ({ name, title, avatar }: PanelProps) => {
  const [isOpen, setIsOpen] = useState(isDesktopViewport);
  const navigate = useNavigate();

  useEffect(() => {
    let wasDesktop = isDesktopViewport();
    const handleResize = () => {
      const desktopNow = isDesktopViewport();
      if (desktopNow !== wasDesktop) {
        wasDesktop = desktopNow;
        setIsOpen(desktopNow);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        className={styles.hamburger}
        onClick={() => setIsOpen((open) => !open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && !isDesktopViewport() && (
        <div
          className={styles.backdrop}
          role="presentation"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        data-testid="panel"
        className={isOpen ? `${styles.panel} ${styles.open}` : styles.panel}
      >
        <div className={styles.content}>
          <PhotoBox name={name} title={title} description="" avatar={avatar} />
          <Navigation />
          <button type="button" className={styles.goBack} onClick={() => navigate('/')}>
            <GoBackIcon className={styles.goBackIcon} aria-hidden="true" />
            Go back
          </button>
        </div>
      </aside>
    </>
  );
};
