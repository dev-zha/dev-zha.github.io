import { TbExternalLink } from 'react-icons/tb';
import { Project } from '@/types/project';
import Chip from '../Chip';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group w-full h-80 bg-white rounded-3xl shadow-md hover:shadow-lg hover:shadow-primary-200 border border-neutral-300 hover:border-primary-300 hover:-translate-y-2 transition ease-in overflow-hidden cursor-pointer"
    >
      <div className="relative flex flex-col h-full justify-between gap-4 p-4">
        <div className="">
          <h6 className="text-gray-800 text-xl font-bold line-clamp-2">
            {project.title}
          </h6>
          <p className="text-neutral-500 text-xs font-medium font-mono line-clamp-3 mt-1">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Chip key={tag} className=" text-primary border-primary">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
        <div className="w-full h-36 bg-neutral-300 rounded-xl border border-neutral-200 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} - Cover`}
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="absolute right-3 top-3 bg-primary-200/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition ease-in">
          <TbExternalLink className="w-5 h-5 stroke-primary" />
        </div>
      </div>
    </Link>
  );
}
