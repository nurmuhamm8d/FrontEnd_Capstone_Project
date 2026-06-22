import styles from './Info.module.scss';

export interface InfoProps {
  text: string;
}

export const Info = ({ text }: InfoProps) => <p className={styles.info}>{text}</p>;
