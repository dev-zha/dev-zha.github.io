import { Metadata } from 'next';
import ProjectListPageComponent from '@/components/pages/ProjectListPageComponent';
import { profileData } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profileData.name} | Projects`,
  description: `Welcome to my project showcase! Here, you'll find a mix of my work. Dive in and discover what I've been up to. Have fun exploring!`,
  openGraph: {
    title: `${profileData.name} | Projects`,
    description: `Welcome to my project showcase! Here, you'll find a mix of my work. Dive in and discover what I've been up to. Have fun exploring!`,
    images: '/images/open-graph/projects-og.png',
  },
};

export default function ProjectListPage() {
  return <ProjectListPageComponent />;
}
