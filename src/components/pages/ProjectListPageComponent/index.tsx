import { getSortedProjectsData } from '@/lib/project';
import ProjectCard from '../../shared/card/ProjectCard';
import MListPageHeader from '@/components/shared/motion/MListPageHeader';
import CardList from './CardList';

export default function ProjectListPageComponent() {
  const projects = getSortedProjectsData();
  return (
    <div className="w-full max-w-screen-lg mt-16 mx-auto rounded-lg py-6">
      <MListPageHeader
        titile="My Projects"
        text={`Welcome to my project showcase! Here, you'll find a mix of my work. Dive in and discover what I've been up to. Have fun exploring!`}
      />
      <CardList projects={projects} />
    </div>
  );
}
