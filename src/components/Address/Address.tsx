import styles from './Address.module.scss';

export interface AddressProps {
  email: string;
  phone: string;
  location: string;
}

export const Address = ({ email, phone, location }: AddressProps) => (
  <address className={styles.address}>
    <p>
      <a href={`mailto:${email}`}>{email}</a>
    </p>
    <p>
      <a href={`tel:${phone}`}>{phone}</a>
    </p>
    <p>{location}</p>
  </address>
);
