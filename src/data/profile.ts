import { IconType } from 'react-icons';
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiCodesandbox,
  SiMaildotru,
} from 'react-icons/si';
import { MdPhoneEnabled } from 'react-icons/md';

export const profileData = {
  name: 'Zaw Htet Aung',
  position: 'Software Developer',
  email: 'zawhtetaung21199@gmail.com',
  phone: '+959791425608',
  aboutMe: `Hey there! I'm Zaw Hte Aung, a Software Developer 
currently employed at a Tech Solution Company in Yangon. 
I enjoy working on both web and mobile applications, 
where every line of code is an opportunity to create something special. 
I am open to job opportunities where I can contribute, learn, and grow. 
If you have an exciting opportunity that aligns with my skills and experience, 
please don't hesitate to contact me.`,
};

export const resumeLink = 'www.google.com';

export interface SocialLink {
  name: string;
  icon: IconType;
  link: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Github',
    icon: SiGithub,
    link: 'https://github.com/dev-zha',
  },
  {
    name: 'Linkedin',
    icon: SiLinkedin,
    link: 'https://linkedin.com/in/zawhtetaung21199',
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
    link: 'https://www.instagram.com/zeus_zer0',
  },
  {
    name: 'CodeSandbox',
    icon: SiCodesandbox,
    link: 'https://codesandbox.io/u/zawhtetaung',
  },
  {
    name: 'Email',
    icon: SiMaildotru,
    link: 'mailto:zawhtetaung21199@gmail.com',
  },
  {
    name: 'Phone',
    icon: MdPhoneEnabled,
    link: 'tel:+959791425608',
  },
];
