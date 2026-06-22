import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.scss';

export interface ButtonProps {
  icon?: IconDefinition;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button = ({ icon, text, onClick, type = 'button' }: ButtonProps) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    <span>{text}</span>
  </button>
);
