import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Panel } from '../../components/Panel/Panel';
import styles from './Inner.module.scss';

const BACK_TO_TOP_THRESHOLD = 200;

const SECTION_TITLES: Record<string, string> = {
  about: 'About me',
  education: 'Education',
  experience: 'Experience',
  skills: '',
  portfolio: 'Portfolio',
  contacts: 'Contacts',
  feedback: 'Feedback',
};

export const Inner = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { pathname } = useLocation();
  const sectionId = pathname.split('/').pop() ?? 'about';
  const sectionTitle = SECTION_TITLES[sectionId] ?? '';

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setShowBackToTop(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > BACK_TO_TOP_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.inner}>
      <Panel name="Nurmuhamed" title="Front-end Developer" avatar="/assets/images/avatar.jpg" />
      <main className={styles['inner__content']}>
        <section className={styles['inner__section']}>
          {sectionTitle && <h2 className={styles['inner__section-title']}>{sectionTitle}</h2>}
          <Outlet />
        </section>
        <button
          type="button"
          aria-label="Back to top"
          className={
            showBackToTop
              ? `${styles['inner__back-to-top']} ${styles['inner__back-to-top--visible']}`
              : styles['inner__back-to-top']
          }
          onClick={handleBackToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </main>
    </div>
  );
};
