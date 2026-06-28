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

const DESKTOP_WIDTH = 250;
const MOBILE_OPEN_WIDTH = 240;
const MOBILE_RAIL_WIDTH = 60;

const isDesktopViewport = () =>
  typeof window !== 'undefined' && window.innerWidth > 599 && window.innerHeight > 500;

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
  const hamburgerLeft = isMobile
    ? (isOpen ? MOBILE_OPEN_WIDTH : MOBILE_RAIL_WIDTH)
    : (isOpen ? DESKTOP_WIDTH : 0);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        className={styles['panel__hamburger']}
        style={{ left: `${hamburgerLeft}px` }}
        onClick={() => setIsOpen((open) => !open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && isMobile && (
        <div
          className={styles['panel__backdrop']}
          role="presentation"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        data-testid="panel"
        className={isOpen ? `${styles.panel} ${styles['panel--open']}` : styles.panel}
      >
        <div className={styles['panel__content']}>
          <div className={compact ? `${styles['panel__photo']} ${styles['panel__photo--compact']}` : styles['panel__photo']}>
            <PhotoBox name={name} avatar={avatar} variant="sidebar" />
          </div>
          <Navigation compact={compact} />
        </div>
        <button
          type="button"
          className={compact ? `${styles['panel__go-back']} ${styles['panel__go-back--compact']}` : styles['panel__go-back']}
          onClick={() => navigate('/')}
          aria-label="Go back"
        >
          <GoBackIcon className={styles['panel__go-back-icon']} aria-hidden="true" />
          {!compact && <span>Go back</span>}
        </button>
      </aside>
    </>
  );
};
