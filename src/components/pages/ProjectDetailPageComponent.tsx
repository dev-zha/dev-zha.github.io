import MarkdownComponent from '@/components/shared/MarkdownComponent';
import { Project } from '@/types/project';
import { FaCode, FaPlay } from 'react-icons/fa6';
import Chip from '../shared/Chip';
import ButtonWithIcon from '../shared/button/LinkBtnWithIcon';

interface ProjectDetailPageComponentProps {
  project: Project;
  content: string;
}

export default function ProjectDetailPageComponent({
  project,
  content,
}: ProjectDetailPageComponentProps) {
  return (
    <div className="w-full max-w-screen-md bg-neutral-50 p-6 mt-20 mb-6 mx-auto rounded-lg">
      <article>
        <h1 className="text-neutral-900 text-4xl font-bold font-serif tracking-wider mb-4">
          {project.title}
        </h1>
        <div className="my-8">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={project.image}
            alt={`${project.title} - Cover Image`}
          />
        </div>
        <div className="flex gap-4">
          {project?.sourceCode && (
            <ButtonWithIcon
              href={project.sourceCode}
              target="_blank"
              EndIcon={FaCode}
            >
              Source Code
            </ButtonWithIcon>
          )}
          {project.liveUrl && (
            <ButtonWithIcon
              href={project.liveUrl}
              target="_blank"
              EndIcon={FaPlay}
            >
              Live Demo
            </ButtonWithIcon>
          )}
        </div>
        <MarkdownComponent markdown={content} />
      </article>
      <div className="flex flex-wrap gap-2 mt-8">
        {project.tags?.map((tag) => (
          <Chip
            key={tag}
            className="bg-primary-50 text-primary-400 border-primary-400"
          >
            {tag}
          </Chip>
        ))}
      </div>
    </div>
  );
}
