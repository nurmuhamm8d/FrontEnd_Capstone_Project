import type { FeedbackItem } from '../../assets/data/feedback';
import styles from './Feedback.module.scss';

export interface FeedbackProps {
  data: FeedbackItem[];
}

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

export const Feedback = ({ data }: FeedbackProps) => (
  <ul className={styles.list}>
    {data.map(({ feedback, reporter }) => (
      <li key={reporter.name} className={styles.item}>
        <p className={styles.quote}>{feedback}</p>
        <div className={styles.reporter}>
          <img src={reporter.photoUrl} alt={reporter.name} className={styles.photo} />
          <p className={styles.byline}>
            <span className={styles.name}>{reporter.name}</span>
            {reporter.role && ` ${reporter.role},`}{' '}
            <a href={reporter.citeUrl} target="_blank" rel="noreferrer" className={styles.link}>
              {hostname(reporter.citeUrl)}
            </a>
          </p>
        </div>
      </li>
    ))}
  </ul>
);
