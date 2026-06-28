import { PhoneIcon } from '../../assets/icons/contacts/phone';
import { EmailIcon } from '../../assets/icons/contacts/email';
import { TwitterIcon } from '../../assets/icons/contacts/twitter';
import { FacebookIcon } from '../../assets/icons/contacts/facebook';
import { VkIcon } from '../../assets/icons/contacts/vk';
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

const SOCIAL_ICONS: Record<string, typeof TwitterIcon> = {
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  VK: VkIcon,
};

export const Address = ({ email, phone, location, socials = [] }: AddressProps) => (
  <address className={styles.address}>
    <p className={styles['address__row']}>
      <PhoneIcon className={styles['address__icon']} aria-hidden="true" />
      <a href={`tel:${phone}`} className={styles['address__primary']}>
        {phone}
      </a>
    </p>
    <p className={styles['address__row']}>
      <EmailIcon className={styles['address__icon']} aria-hidden="true" />
      <a href={`mailto:${email}`} className={styles['address__primary']}>
        {email}
      </a>
    </p>
    {socials.map(({ label, value, url }) => {
      const Icon = SOCIAL_ICONS[label];
      return (
        <p className={styles['address__row']} key={label}>
          {Icon && <Icon className={styles['address__icon']} aria-hidden="true" />}
          <span className={styles['address__social-text']}>
            <span className={styles['address__primary']}>{label}</span>
            <a href={url} target="_blank" rel="noreferrer" className={styles['address__secondary']}>
              {value}
            </a>
          </span>
        </p>
      );
    })}
    {location && <p className={styles['address__location']}>{location}</p>}
  </address>
);
