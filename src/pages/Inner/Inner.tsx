import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Panel } from '../../components/Panel/Panel';
import { AboutMe } from './sections/AboutMe';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { SkillsSection } from './sections/SkillsSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { Contacts } from './sections/Contacts';
import { FeedbackSection } from './sections/FeedbackSection';
import styles from './Inner.module.scss';

const SECTIONS = [
  { id: 'about', title: 'About me', Component: AboutMe },
  { id: 'education', title: 'Education', Component: Education },
  { id: 'experience', title: 'Experience', Component: Experience },
  { id: 'skills', title: 'Skills', Component: SkillsSection },
  { id: 'portfolio', title: 'Portfolio', Component: PortfolioSection },
  { id: 'contacts', title: 'Contacts', Component: Contacts },
  { id: 'feedback', title: 'Feedback', Component: FeedbackSection },
];

export const Inner = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 200);
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
        {SECTIONS.map(({ id, title, Component }) => (
          <section key={id} id={id} className={styles['inner__section']}>
            {id !== 'skills' && <h2 className={styles['inner__section-title']}>{title}</h2>}
            <Component />
          </section>
        ))}
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
