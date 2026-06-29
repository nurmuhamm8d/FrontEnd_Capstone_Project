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
  <div className={variant === 'sidebar' ? `${styles['photo-box']} ${styles['photo-box--sidebar']}` : styles['photo-box']}>
    <img
      className={variant === 'sidebar' ? `${styles['photo-box__avatar']} ${styles['photo-box__avatar--sidebar']}` : styles['photo-box__avatar']}
      src={avatar}
      alt={name}
    />
    {variant === 'sidebar' ? (
      <p className={`${styles['photo-box__name']} ${styles['photo-box__name--sidebar']}`}>{name}</p>
    ) : (
      <h1 className={styles['photo-box__name']}>{name}</h1>
    )}
    {title && <h2 className={styles['photo-box__title']}>{title}</h2>}
    {description && (
      <div className={styles['photo-box__description']}>
        <Info text={description} />
      </div>
    )}
  </div>
);
