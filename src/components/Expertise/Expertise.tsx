import type { ExpertiseItem } from '../../assets/data/expertise';
import styles from './Expertise.module.scss';

export interface ExpertiseProps {
  data: ExpertiseItem[];
}

export const Expertise = ({ data }: ExpertiseProps) => (
  <ul className={styles.expertise}>
    {data.map(({ date, info }) => (
      <li key={`${date}-${info.company}`} className={styles['expertise__item']}>
        <div className={styles['expertise__meta']}>
          <h3 className={styles['expertise__company']}>{info.company}</h3>
          <time className={styles['expertise__date']}>{date}</time>
        </div>
        <div className={styles['expertise__details']}>
          <h4 className={styles['expertise__job']}>{info.job}</h4>
          <p className={styles['expertise__description']}>{info.description}</p>
        </div>
      </li>
    ))}
  </ul>
);
