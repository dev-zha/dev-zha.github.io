import { TbExternalLink } from 'react-icons/tb';
import { Project } from '@/types/project';
import Chip from '../Chip';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-80 bg-white rounded-3xl shadow-xl ring-1 ring-gray-900/10 hover:scale-[101%] transition ease-in overflow-hidden cursor-pointer"
    >
      <img
        src={project.image}
        alt="Project Image"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/50 via-black/10 via-50% group-hover:to-black/30">
        <div className="flex h-full flex-col justify-end p-5">
          <h6 className="text-gray-100 text-xl font-bold line-clamp-2">
            {project.title}
          </h6>
          <p className="text-gray-300 text-xs font-semibold font-mono line-clamp-3 mt-1">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="opacity-0 absolute right-5 top-5 group-hover:opacity-100 transition ease-in">
        <TbExternalLink className="w-6 h-6 stroke-white" />
      </div>
    </div>
  );
}
