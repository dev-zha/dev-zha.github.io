import {
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiJavascript,
  SiVuedotjs,
  SiNodedotjs,
  SiKotlin,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiNuxtdotjs,
  SiNestjs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiGit,
  SiMaterialdesign,
  SiDocker,
  SiSwr,
  SiVercel,
  SiPrisma,
  SiExpo,
  SiMui,
  SiNgrok,
  SiPostman,
  SiRedux,
  SiSwagger,
  SiVisualstudio,
  SiXampp,
  SiAndroidstudio,
  SiTypescript,
  SiSqlite,
  SiSocketdotio,
  SiMapbox,
  SiGooglecloud,
  SiRender,
} from 'react-icons/si';
import { IoLogoGitlab } from 'react-icons/io5';

import { IconType } from 'react-icons';

export interface SkillIcon {
  name: string;
  category: 'mobile' | 'web' | 'database' | 'tool' | 'other';
  icon: IconType;
}

export const skillIcons: SkillIcon[] = [
  {
    name: 'HTML',
    category: 'web',
    icon: SiHtml5,
  },
  {
    name: 'css',
    category: 'web',
    icon: SiCss3,
  },
  {
    name: 'Bootstrap',
    category: 'web',
    icon: SiBootstrap,
  },
  {
    name: 'Tailwind',
    category: 'web',
    icon: SiTailwindcss,
  },
  {
    name: 'PHP',
    category: 'web',
    icon: SiPhp,
  },
  {
    name: 'Laravel',
    category: 'web',
    icon: SiLaravel,
  },
  {
    name: 'JavaScript',
    category: 'web',
    icon: SiJavascript,
  },
  {
    name: 'TypeScript',
    category: 'web',
    icon: SiTypescript,
  },
  {
    name: 'React.js',
    category: 'web',
    icon: SiReact,
  },
  {
    name: 'Next.js',
    category: 'web',
    icon: SiNextdotjs,
  },
  {
    name: 'Vue.js',
    category: 'web',
    icon: SiVuedotjs,
  },
  {
    name: 'Nuxt.js',
    category: 'web',
    icon: SiNuxtdotjs,
  },
  {
    name: 'Node.js',
    category: 'web',
    icon: SiNodedotjs,
  },
  {
    name: 'Express.js',
    category: 'web',
    icon: SiExpress,
  },
  {
    name: 'Nest.js',
    category: 'web',
    icon: SiNestjs,
  },
  {
    name: 'ReactNative',
    category: 'mobile',
    icon: SiReact,
  },
  {
    name: 'Expo',
    category: 'mobile',
    icon: SiExpo,
  },
  {
    name: 'Kotlin',
    category: 'mobile',
    icon: SiKotlin,
  },
  {
    name: 'Flutter',
    category: 'mobile',
    icon: SiFlutter,
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: SiMysql,
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: SiPostgresql,
  },
  {
    name: 'MongoDB',
    category: 'database',
    icon: SiMongodb,
  },
  {
    name: 'Firebase',
    category: 'database',
    icon: SiFirebase,
  },
  {
    name: 'SQlite',
    category: 'database',
    icon: SiSqlite,
  },
  {
    name: 'Git',
    category: 'tool',
    icon: SiGit,
  },
  {
    name: 'Github',
    category: 'tool',
    icon: SiGithub,
  },
  {
    name: 'Gitlab',
    category: 'tool',
    icon: IoLogoGitlab,
  },
  {
    name: 'Docker',
    category: 'tool',
    icon: SiDocker,
  },
  {
    name: 'Google Cloud',
    category: 'tool',
    icon: SiGooglecloud,
  },
  {
    name: 'Vercel',
    category: 'tool',
    icon: SiVercel,
  },
  {
    name: 'Render',
    category: 'tool',
    icon: SiRender,
  },
  {
    name: 'Ngrok',
    category: 'tool',
    icon: SiNgrok,
  },
  {
    name: 'Postman',
    category: 'tool',
    icon: SiPostman,
  },
  {
    name: 'XAMPP',
    category: 'tool',
    icon: SiXampp,
  },
  {
    name: 'Visual Studio',
    category: 'tool',
    icon: SiVisualstudio,
  },
  {
    name: 'Android Studio',
    category: 'tool',
    icon: SiAndroidstudio,
  },
  {
    name: 'Mapbox SDK',
    category: 'tool',
    icon: SiMapbox,
  },
  {
    name: 'Socket.io',
    category: 'other',
    icon: SiSocketdotio,
  },
  {
    name: 'Prisma',
    category: 'other',
    icon: SiPrisma,
  },
  {
    name: 'SWR',
    category: 'other',
    icon: SiSwr,
  },
  {
    name: 'Material design',
    category: 'other',
    icon: SiMaterialdesign,
  },
  {
    name: 'MUI',
    category: 'other',
    icon: SiMui,
  },
  {
    name: 'Redux',
    category: 'other',
    icon: SiRedux,
  },
  {
    name: 'Swagger',
    category: 'other',
    icon: SiSwagger,
  },
];
