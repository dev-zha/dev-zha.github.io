import { TbExternalLink } from 'react-icons/tb';
import Chip from '@/components/shared/Chip';
import { Blog } from '@/types/blog';
import Link from 'next/link';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="group relative flex flex-col md:flex-row gap-4 w-full md:h-48 rounded-3xl bg-white shadow-xl p-4 ring-1 ring-gray-900/10 hover:scale-[101%] transition ease-in cursor-pointer overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img
          className="w-full md:w-48 h-40 object-cover rounded-xl"
          src={blog.image}
          alt={`${blog.title} - Cover`}
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 justify-between min-w-0">
        <div className="flex flex-col gap-1">
          <h6 className="text-lg font-bold text-gray-900 line-clamp-2">
            {blog.title}
          </h6>
          <span className="text-gray-400 text-xs">{blog.date}</span>
          <span className="text-gray-900 text-xs font-mono line-clamp-3 md:line-clamp-2">
            {blog.description}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
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
      <div className="absolute right-5 bottom-5 opacity-0 group-hover:opacity-100 transition ease-in">
        <TbExternalLink className="w-6 h-6 stroke-primary-400" />
      </div>
    </Link>
  );
}
