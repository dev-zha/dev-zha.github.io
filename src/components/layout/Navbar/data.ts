export interface NavItem {
  title: string;
  link: string;
}

export const navItems: NavItem[] = [
  {
    title: 'About Me',
    link: '/#about-me',
  },
  {
    title: 'Project',
    link: '/projects',
  },
  {
    title: 'Blog',
    link: '/blogs',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
];
