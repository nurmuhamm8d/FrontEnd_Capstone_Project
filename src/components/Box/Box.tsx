import styles from './Box.module.scss';

export interface BoxProps {
  title: string;
  content: string;
}

export const Box = ({ title, content }: BoxProps) => (
  <section className={styles.box}>
    {title && <h3 className={styles['box__title']}>{title}</h3>}
    <p className={styles['box__content']}>{content}</p>
  </section>
);
