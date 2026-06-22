import type { FeedbackItem } from '../../assets/data/feedback';
import styles from './Feedback.module.scss';

export interface FeedbackProps {
  data: FeedbackItem[];
}

export const Feedback = ({ data }: FeedbackProps) => (
  <ul className={styles.list}>
    {data.map(({ feedback, reporter }) => (
      <li key={reporter.name} className={styles.item}>
        <p className={styles.quote}>&ldquo;{feedback}&rdquo;</p>
        <div className={styles.reporter}>
          <img src={reporter.photoUrl} alt={reporter.name} className={styles.photo} />
          <a href={reporter.citeUrl} target="_blank" rel="noreferrer">
            {reporter.name}
          </a>
        </div>
      </li>
    ))}
  </ul>
);
