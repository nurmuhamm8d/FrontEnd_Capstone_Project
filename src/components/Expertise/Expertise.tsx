import type { ExpertiseItem } from '../../assets/data/expertise';
import styles from './Expertise.module.scss';

export interface ExpertiseProps {
  data: ExpertiseItem[];
}

export const Expertise = ({ data }: ExpertiseProps) => (
  <ul className={styles.list}>
    {data.map(({ date, info }) => (
      <li key={`${date}-${info.company}`} className={styles.item}>
        <div className={styles.meta}>
          <h3 className={styles.company}>{info.company}</h3>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.details}>
          <h4 className={styles.job}>{info.job}</h4>
          <p className={styles.description}>{info.description}</p>
        </div>
      </li>
    ))}
  </ul>
);
