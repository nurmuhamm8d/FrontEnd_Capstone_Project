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

const variantClass: Record<ButtonVariant, string> = {
  primary: styles['button--primary'],
  overlay: styles['button--overlay'],
  ghost: styles['button--ghost'],
};

export const Button = ({ icon, text, onClick, type = 'button', variant = 'primary' }: ButtonProps) => (
  <button type={type} className={`${styles.button} ${variantClass[variant]}`} onClick={onClick}>
    {icon && <FontAwesomeIcon icon={icon} className={styles['button__icon']} />}
    <span>{text}</span>
  </button>
);
