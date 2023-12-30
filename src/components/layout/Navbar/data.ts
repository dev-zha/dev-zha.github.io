import { IconType } from 'react-icons';
import {
  TbUser ,
  TbCode,
  TbFeather,
  TbAddressBook,
} from 'react-icons/tb';

export interface NavItem {
  title: string;
  link: string;
  icon: IconType;
}

export const navItems: NavItem[] = [
  {
    title: 'About Me',
    link: '/#about-me',
    icon: TbUser ,
  },
  {
    title: 'Project',
    link: '/projects',
    icon: TbCode,
  },
  {
    title: 'Blog',
    link: '/blogs',
    icon: TbFeather,
  },
  {
    title: 'Contact',
    link: '/#contact',
    icon: TbAddressBook,
  },
];
