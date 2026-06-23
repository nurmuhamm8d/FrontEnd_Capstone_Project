import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'overlay' | 'ghost';

export interface ButtonProps {
  icon?: IconDefinition;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: ButtonVariant;
}

export const Button = ({ icon, text, onClick, type = 'button', variant = 'primary' }: ButtonProps) => (
  <button type={type} className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
    {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    <span>{text}</span>
  </button>
);
