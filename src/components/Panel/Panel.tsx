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

const SIDEBAR_WIDTH = 250;

const isDesktopViewport = () =>
  typeof window !== 'undefined' && window.innerWidth > 599;

export const Panel = ({ name, avatar }: PanelProps) => {
  const [isOpen, setIsOpen] = useState(isDesktopViewport);
  const [isMobile, setIsMobile] = useState(() => !isDesktopViewport());
  const navigate = useNavigate();

  useEffect(() => {
    let wasDesktop = isDesktopViewport();
    const handleResize = () => {
      const desktopNow = isDesktopViewport();
      setIsMobile(!desktopNow);
      if (desktopNow !== wasDesktop) {
        wasDesktop = desktopNow;
        setIsOpen(desktopNow);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const compact = isMobile && !isOpen;
  const hamburgerLeft = isOpen ? SIDEBAR_WIDTH : 0;

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        className={styles.hamburger}
        style={{ left: `${hamburgerLeft}px` }}
        onClick={() => setIsOpen((open) => !open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && isMobile && (
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
          <div className={compact ? `${styles.photo} ${styles.compactPhoto}` : styles.photo}>
            <PhotoBox name={name} avatar={avatar} variant="sidebar" />
          </div>
          <Navigation compact={compact} />
          <button
            type="button"
            className={compact ? `${styles.goBack} ${styles.goBackCompact}` : styles.goBack}
            onClick={() => navigate('/')}
            aria-label="Go back"
          >
            <GoBackIcon className={styles.goBackIcon} aria-hidden="true" />
            {!compact && <span>Go back</span>}
          </button>
        </div>
      </aside>
    </>
  );
};
