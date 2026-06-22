import { Info } from '../Info/Info';
import styles from './PhotoBox.module.scss';

export interface PhotoBoxProps {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export const PhotoBox = ({ name, title, description, avatar }: PhotoBoxProps) => (
  <div className={styles.photoBox}>
    <img className={styles.avatar} src={avatar} alt={name} />
    <h1 className={styles.name}>{name}</h1>
    <h2 className={styles.title}>{title}</h2>
    {description && (
      <div className={styles.description}>
        <Info text={description} />
      </div>
    )}
  </div>
);
