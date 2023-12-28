'use client';

import CardListContainer from '@/components/shared/motion/CardListContainer';
import BlogCard from '@/components/shared/card/BlogCard';
import { Blog } from '@/types/blog';

interface CardListProps {
  blogs: Blog[];
}

export default function CardList({ blogs }: CardListProps) {
  return (
    <CardListContainer>
      <ul className="flex flex-col gap-8 px-4 pb-8 mt-8">
        {blogs?.map((blog) => (
          <li key={blog.id} className="contents">
            <BlogCard blog={blog} />
          </li>
        ))}
      </ul>
    </CardListContainer>
  );
}
