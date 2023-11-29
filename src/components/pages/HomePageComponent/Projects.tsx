import { getProjects } from '@/utils/helper';
import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import ProjectCard from '@/components/shared/card/ProjectCard';
import LinkToButton from '@/components/shared/LinkToButton';

export default function Projects() {
  const projects = getProjects();

  return (
    <MContainer id="projects">
      <MHeaderTitle>Projects</MHeaderTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto px-4 mt-8">
        {projects?.slice(0, 3)?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <LinkToButton>Explore More Projects</LinkToButton>
      </div>
    </MContainer>
  );
}
