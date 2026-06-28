import type { ReactNode } from 'react';
import styles from './Notification.module.scss';

export interface NotificationProps {
  type?: 'error' | 'success';
  children: ReactNode;
}

const typeClass: Record<string, string> = {
  error: styles['notification--error'],
  success: styles['notification--success'],
};

export const Notification = ({ type = 'error', children }: NotificationProps) => (
  <div className={`${styles.notification} ${typeClass[type] ?? ''}`} role="alert">
    {children}
  </div>
);
