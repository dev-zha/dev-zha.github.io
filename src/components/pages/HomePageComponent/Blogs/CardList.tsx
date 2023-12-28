'use client';

import { motion } from 'framer-motion';
import BlogCard from '@/components/shared/card/BlogCard';
import { Blog } from '@/types/blog';

interface CardList {
  blogs: Blog[];
}

export default function CardList({ blogs }: CardList) {
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
      className="w-full max-w-screen-md mx-auto pt-6"
    >
      {blogs?.slice(0, 3).map((blog) => (
        <div key={blog.id} className="p-4">
          <BlogCard blog={blog} />
        </div>
      ))}
    </motion.div>
  );
}
