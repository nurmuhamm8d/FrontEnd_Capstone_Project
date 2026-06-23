import type { ReactNode } from 'react';
import styles from './Notification.module.scss';

export interface NotificationProps {
  type?: 'error' | 'success';
  children: ReactNode;
}

export const Notification = ({ type = 'error', children }: NotificationProps) => (
  <div className={`${styles.notification} ${styles[type]}`} role="alert">
    {children}
  </div>
);
