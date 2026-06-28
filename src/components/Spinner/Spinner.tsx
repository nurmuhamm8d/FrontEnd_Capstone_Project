import styles from './Spinner.module.scss';

export interface SpinnerProps {
  label?: string;
}

export const Spinner = ({ label = 'Загрузка…' }: SpinnerProps) => (
  <div className={styles.spinner} role="status">
    <span className={styles['spinner__circle']} aria-hidden="true" />
    <span className={styles['spinner__label']}>{label}</span>
  </div>
);
