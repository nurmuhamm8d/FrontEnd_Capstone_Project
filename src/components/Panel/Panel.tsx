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

type MobileMode = 'compact' | 'expanded' | 'hidden';

const DESKTOP_WIDTH = 250;
const MOBILE_OPEN_WIDTH = 240;
const MOBILE_RAIL_WIDTH = 60;
const MOBILE_BREAKPOINT_WIDTH = 599;
const MOBILE_BREAKPOINT_HEIGHT = 500;

const isDesktopViewport = () =>
  typeof window !== 'undefined' &&
  window.innerWidth > MOBILE_BREAKPOINT_WIDTH &&
  window.innerHeight > MOBILE_BREAKPOINT_HEIGHT;

export const Panel = ({ name, avatar }: PanelProps) => {
  const [isDesktop, setIsDesktop] = useState(isDesktopViewport);
  const [desktopOpen, setDesktopOpen] = useState(isDesktopViewport);
  const [mobileMode, setMobileMode] = useState<MobileMode>('compact');
  const navigate = useNavigate();

  useEffect(() => {
    let wasDesktop = isDesktopViewport();
    const handleResize = () => {
      const desktopNow = isDesktopViewport();
      setIsDesktop(desktopNow);
      if (desktopNow !== wasDesktop) {
        wasDesktop = desktopNow;
        if (desktopNow) {
          setDesktopOpen(true);
        } else {
          setMobileMode('compact');
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    if (isDesktop) {
      setDesktopOpen((prev) => !prev);
    } else {
      setMobileMode((prev) =>
        prev === 'compact' ? 'expanded' : prev === 'expanded' ? 'hidden' : 'compact'
      );
    }
  };

  const compact = !isDesktop && mobileMode === 'compact';
  const showBackdrop = !isDesktop && mobileMode === 'expanded';

  const panelClass = (() => {
    if (isDesktop) {
      return desktopOpen
        ? `${styles.panel} ${styles['panel--open']}`
        : styles.panel;
    }
    if (mobileMode === 'compact') return `${styles.panel} ${styles['panel--mobile-compact']}`;
    if (mobileMode === 'expanded') return `${styles.panel} ${styles['panel--open']}`;
    return styles.panel;
  })();

  const hamburgerLeft = isDesktop
    ? desktopOpen ? DESKTOP_WIDTH : 0
    : mobileMode === 'expanded' ? MOBILE_OPEN_WIDTH
    : mobileMode === 'compact' ? MOBILE_RAIL_WIDTH
    : 0;

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        className={styles['panel__hamburger']}
        style={{ left: `${hamburgerLeft}px` }}
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {showBackdrop && (
        <div
          className={styles['panel__backdrop']}
          role="presentation"
          onClick={() => setMobileMode('compact')}
        />
      )}
      <aside
        data-testid="panel"
        className={panelClass}
      >
        <div className={styles['panel__content']}>
          <div
            className={
              compact
                ? `${styles['panel__photo']} ${styles['panel__photo--compact']}`
                : styles['panel__photo']
            }
          >
            <PhotoBox name={name} avatar={avatar} variant="sidebar" />
          </div>
          <Navigation compact={compact} />
        </div>
        <button
          type="button"
          className={
            compact
              ? `${styles['panel__go-back']} ${styles['panel__go-back--compact']}`
              : styles['panel__go-back']
          }
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
