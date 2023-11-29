import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { MdPhoneEnabled } from 'react-icons/md';

import { IconType } from 'react-icons';

export const profileData = {
  name: 'Zaw Htet Aung',
  position: 'Software Developer',
  aboutMe: `Hey there! I'm Zaw Hte Aung, a Junior Developer currently employed at a Tech Solution Company in Yangon. 
My coding journey started at MIIT, where I refined my skills and gained valuable experience. 
I enjoy in working on both web and mobile applications, where every line of code is an opportunity to create something special. 
I am open to job opportunities where I can contribute, learn, and grow. If you have an exciting opportunity that aligns with my skills and experience, please don't hesitate to contact me.`,
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
    icon: IoLogoGithub,
    link: 'https://github.com',
  },
  {
    name: 'Linkedin',
    icon: IoLogoLinkedin,
    link: 'https://linkedin.com',
  },
  {
    name: 'Instagram',
    icon: AiFillInstagram,
    link: 'https://www.instagram.com/',
  },
  {
    name: 'Email',
    icon: MdOutlineAlternateEmail,
    link: 'mailto:yourmail@gmail.com',
  },
  {
    name: 'Phone',
    icon: MdPhoneEnabled,
    link: 'tel:+95987654321',
  },
];
