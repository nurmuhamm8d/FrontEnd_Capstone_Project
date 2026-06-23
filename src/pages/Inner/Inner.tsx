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
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.layout}>
      <Panel name="Nurmukhamed" title="Front-end Developer" avatar="/assets/images/avatar.jpg" />
      <main className={styles.content}>
        {SECTIONS.map(({ id, title, Component }) => (
          <section key={id} id={id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <Component />
          </section>
        ))}
        <button type="button" aria-label="Back to top" className={styles.backToTop} onClick={handleBackToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </main>
    </div>
  );
};
