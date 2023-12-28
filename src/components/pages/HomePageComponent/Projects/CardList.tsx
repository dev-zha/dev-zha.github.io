'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/shared/card/ProjectCard';
import { Project } from '@/types/project';

interface CardListProps {
  projects: Project[];
}

export default function CardList({ projects }: CardListProps) {
  return (
    <motion.div
      variants={{
        offscreen: {
          y: 30,
        },
        onscreen: {
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.8,
            delay: 1,
          },
        },
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-4 mt-8">
        {projects?.slice(0, 3)?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
