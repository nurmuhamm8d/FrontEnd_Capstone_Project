import { Outlet, useNavigate } from 'react-router-dom';
import { Panel } from '../../components/Panel/Panel';
import styles from './Inner.module.scss';

export const Inner = () => {
  const navigate = useNavigate();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/inner/about');
  };

  return (
    <div className={styles.layout}>
      <Panel name="Nurmukhamed" title="Front-end Developer" avatar="/assets/images/avatar.jpg" />
      <main className={styles.content}>
        <Outlet />
        <button type="button" aria-label="Back to top" className={styles.backToTop} onClick={handleBackToTop}>
          ↑ Top
        </button>
      </main>
    </div>
  );
};
