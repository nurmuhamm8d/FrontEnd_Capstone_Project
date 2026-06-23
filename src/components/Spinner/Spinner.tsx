import styles from './Spinner.module.scss';

export interface SpinnerProps {
  label?: string;
}

export const Spinner = ({ label = 'Загрузка…' }: SpinnerProps) => (
  <div className={styles.wrapper} role="status">
    <span className={styles.circle} aria-hidden="true" />
    <span className={styles.label}>{label}</span>
  </div>
);
