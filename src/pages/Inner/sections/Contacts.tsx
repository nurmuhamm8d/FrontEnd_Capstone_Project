import { Address } from '../../../components/Address/Address';

const socials = [
  { label: 'Twitter', value: 'x.com/KuanNurmuh55039', url: 'https://x.com/KuanNurmuh55039' },
  {
    label: 'Facebook',
    value: 'facebook.com/profile.php?id=61577156997117',
    url: 'https://www.facebook.com/profile.php?id=61577156997117',
  },
  { label: 'VK', value: 'vk.com/id562862119', url: 'https://vk.com/id562862119' },
];

export const Contacts = () => (
  <Address
    email="nurmuhammedkuan@gmail.com"
    phone="+16502530000"
    socials={socials}
  />
);
