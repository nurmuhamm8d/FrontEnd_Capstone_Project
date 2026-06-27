import { Info } from '../Info/Info';
import styles from './PhotoBox.module.scss';

export interface PhotoBoxProps {
  name: string;
  title?: string;
  description?: string;
  avatar: string;
  variant?: 'hero' | 'sidebar';
}

export const PhotoBox = ({ name, title, description, avatar, variant = 'hero' }: PhotoBoxProps) => (
  <div className={variant === 'sidebar' ? `${styles.photoBox} ${styles.sidebarBox}` : styles.photoBox}>
    <img
      className={variant === 'sidebar' ? `${styles.avatar} ${styles.sidebarAvatar}` : styles.avatar}
      src={avatar}
      alt={name}
    />
    <h1 className={variant === 'sidebar' ? `${styles.name} ${styles.sidebarName}` : styles.name}>{name}</h1>
    {title && (
      <h2 className={styles.title}>{title}</h2>
    )}
    {description && (
      <div className={styles.description}>
        <Info text={description} />
      </div>
    )}
  </div>
);
