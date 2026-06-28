import type { TimeLineItem } from '../../assets/data/timeline';
import { CardCornerIcon } from '../../assets/icons/timeline/card-corner';
import styles from './TimeLine.module.scss';

export interface TimeLineProps {
  data: TimeLineItem[];
}

export const TimeLine = ({ data }: TimeLineProps) => (
  <ul className={styles.timeline}>
    {data.map(({ date, title, text }) => (
      <li key={`${date}-${title}`} className={styles['timeline__item']}>
        <span className={styles['timeline__date']}>{date}</span>
        <div className={styles['timeline__card']}>
          <CardCornerIcon className={styles['timeline__corner']} aria-hidden="true" />
          <h3 className={styles['timeline__title']}>{title}</h3>
          <p className={styles['timeline__text']}>{text}</p>
        </div>
      </li>
    ))}
  </ul>
);
