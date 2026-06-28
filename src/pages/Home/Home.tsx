import { useNavigate } from 'react-router-dom';
import { PhotoBox } from '../../components/PhotoBox/PhotoBox';
import { Button } from '../../components/Button/Button';
import styles from './Home.module.scss';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <PhotoBox
        name="Nurmuhamed"
        title="Front-end Developer. AI tooling enthusiast. Builder."
        description="EPAM Tech Orda front-end track graduate-in-progress, turning React/TypeScript practice into real working products — from this CV app to automation bots and AI-assisted tooling."
        avatar="/assets/images/avatar.jpg"
      />
      <Button text="Know more" variant="overlay" onClick={() => navigate('/inner')} />
    </div>
  );
};
