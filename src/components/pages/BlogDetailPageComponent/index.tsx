import { FaCalendarAlt } from 'react-icons/fa';
import MarkdownComponent from '@/components/shared/MarkdownComponent';
import { Blog } from '@/types/blog';
import Chip from '@/components/shared/Chip';

interface BlogDetailPageComponentProps {
  blog: Blog;
  content: string;
}

export default function BlogDetailPageComponent({
  blog,
  content,
}: BlogDetailPageComponentProps) {
  return (
    <div className="w-full max-w-screen-md bg-neutral-50 p-6 mt-20 mb-6 mx-auto rounded-lg">
      <article>
        <h1 className="text-neutral-900 text-4xl font-bold font-serif tracking-wider mb-4">
          {blog.title}
        </h1>
        <div className="text-neutral-500 text-sm">
          <span className="inline-flex items-center gap-2 font-mono">
            <FaCalendarAlt />
            {blog.date}
          </span>
        </div>
        <div className="my-8">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={blog.image}
            alt={`${blog.title} - Cover Image`}
          />
        </div>
        <MarkdownComponent markdown={content} />
      </article>
      <div className="flex flex-wrap gap-2 mt-8">
        {blog.tags?.map((tag) => (
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
