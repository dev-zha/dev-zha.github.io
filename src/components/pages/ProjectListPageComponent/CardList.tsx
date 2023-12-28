'use client';

import CardListContainer from '@/components/shared/motion/CardListContainer';
import ProjectCard from '../../shared/card/ProjectCard';
import { Project } from '@/types/project';

interface Props {
  projects: Project[];
}

export default function CardList({ projects }: Props) {
  return (
    <CardListContainer>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 pb-8 mt-8">
        {projects?.map((project) => (
          <li key={project.id} className="contents">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </CardListContainer>
  );
}
