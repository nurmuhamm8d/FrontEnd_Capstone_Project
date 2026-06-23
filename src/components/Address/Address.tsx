import { PhoneIcon } from '../../assets/icons/contacts/phone';
import { EmailIcon } from '../../assets/icons/contacts/email';
import { TwitterIcon } from '../../assets/icons/contacts/twitter';
import { FacebookIcon } from '../../assets/icons/contacts/facebook';
import { SkypeIcon } from '../../assets/icons/contacts/skype';
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
  Skype: SkypeIcon,
};

export const Address = ({ email, phone, location, socials = [] }: AddressProps) => (
  <address className={styles.address}>
    <p className={styles.row}>
      <PhoneIcon className={styles.icon} aria-hidden="true" />
      <a href={`tel:${phone}`} className={styles.primary}>
        {phone}
      </a>
    </p>
    <p className={styles.row}>
      <EmailIcon className={styles.icon} aria-hidden="true" />
      <a href={`mailto:${email}`} className={styles.primary}>
        {email}
      </a>
    </p>
    {socials.map(({ label, value, url }) => {
      const Icon = SOCIAL_ICONS[label];
      return (
        <p className={styles.row} key={label}>
          {Icon && <Icon className={styles.icon} aria-hidden="true" />}
          <span className={styles.socialText}>
            <span className={styles.primary}>{label}</span>
            <a href={url} target="_blank" rel="noreferrer" className={styles.secondary}>
              {value}
            </a>
          </span>
        </p>
      );
    })}
    {location && <p className={styles.location}>{location}</p>}
  </address>
);
