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
  <ul className={styles.feedback}>
    {data.map(({ feedback, reporter }) => (
      <li key={reporter.name} className={styles['feedback__item']}>
        <p className={styles['feedback__quote']}>{feedback}</p>
        <div className={styles['feedback__reporter']}>
          <img src={reporter.photoUrl} alt={reporter.name} className={styles['feedback__photo']} />
          <p className={styles['feedback__byline']}>
            <span className={styles['feedback__name']}>{reporter.name}</span>
            {reporter.role && ` ${reporter.role},`}{' '}
            <a href={reporter.citeUrl} target="_blank" rel="noreferrer" className={styles['feedback__link']}>
              {hostname(reporter.citeUrl)}
            </a>
          </p>
        </div>
      </li>
    ))}
  </ul>
);
