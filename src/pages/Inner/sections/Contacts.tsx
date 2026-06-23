import { Address } from '../../../components/Address/Address';

const socials = [
  { label: 'Twitter', value: 'github.com/nurmuhamm8d', url: 'https://github.com/nurmuhamm8d' },
  { label: 'Facebook', value: 'github.com/nurmuhamm8d', url: 'https://github.com/nurmuhamm8d' },
  { label: 'Skype', value: 'nurmuhamm8d', url: 'skype:nurmuhamm8d?chat' },
];

export const Contacts = () => (
  <Address
    email="nurmuhammedkuan@gmail.com"
    phone="+77000000000"
    socials={socials}
  />
);
