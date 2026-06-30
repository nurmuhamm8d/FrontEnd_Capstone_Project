import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSkype, faXTwitter, faFacebook, faVk } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './Address.module.scss';

export interface SocialLink {
  label: string;
  value: string;
  url: string;
}

export interface AddressProps {
  email: string;
  phone: string;
  location?: string;
  socials?: SocialLink[];
}

const SOCIAL_ICONS: Record<string, IconDefinition> = {
  Twitter: faXTwitter,
  Facebook: faFacebook,
  VK: faVk,
  Skype: faSkype,
};

export const Address = ({ email, phone, location, socials = [] }: AddressProps) => (
  <address className={styles.address}>
    <ul className={styles['address__list']}>
      <li className={styles['address__row']}>
        <FontAwesomeIcon icon={faPhone} className={styles['address__icon']} aria-hidden="true" />
        <a href={`tel:${phone}`} className={styles['address__primary']}>
          {phone}
        </a>
      </li>
      <li className={styles['address__row']}>
        <FontAwesomeIcon icon={faEnvelope} className={styles['address__icon']} aria-hidden="true" />
        <a href={`mailto:${email}`} className={styles['address__primary']}>
          {email}
        </a>
      </li>
      {socials.map(({ label, value, url }) => {
        const icon = SOCIAL_ICONS[label];
        return (
          <li className={styles['address__row']} key={label}>
            {icon && <FontAwesomeIcon icon={icon} className={styles['address__icon']} aria-hidden="true" />}
            <span className={styles['address__social-text']}>
              <span className={styles['address__primary']}>{label}</span>
              <a href={url} target="_blank" rel="noreferrer" className={styles['address__secondary']}>
                {value}
              </a>
            </span>
          </li>
        );
      })}
      {location && <li className={styles['address__location']}>{location}</li>}
    </ul>
  </address>
);
