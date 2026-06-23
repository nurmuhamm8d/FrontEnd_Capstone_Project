import type { TimeLineItem } from '../../assets/data/timeline';
import styles from './TimeLine.module.scss';

export interface TimeLineProps {
  data: TimeLineItem[];
}

export const TimeLine = ({ data }: TimeLineProps) => (
  <ul className={styles.timeline}>
    <span className={styles.rail} aria-hidden="true" />
    {data.map(({ date, title, text }) => (
      <li key={`${date}-${title}`} className={styles.item}>
        <span className={styles.date}>{date}</span>
        <div className={styles.card}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </li>
    ))}
  </ul>
);
