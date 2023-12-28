'use client';

import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import { Project } from '@/types/project';
import CardList from './CardList';
import GoToListBtn from './GoToListBtn';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <MContainer id="projects">
      <MHeaderTitle>Projects</MHeaderTitle>
      <CardList projects={projects} />
      <GoToListBtn />
    </MContainer>
  );
}
