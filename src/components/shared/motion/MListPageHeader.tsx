'use client';

import { motion } from 'framer-motion';

interface MListPageHeaderProps {
  titile: string;
  text: string;
}
export default function MListPageHeader({
  titile,
  text,
}: MListPageHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delayChildren: 0.6,
          },
        },
      }}
      className="border-b-2 border-primary-500 px-4 pb-4"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="text-primary-700 text-2xl font-extrabold tracking-wider mb-4"
      >
        {titile}
      </motion.h1>
      <motion.p
        variants={{
          hidden: {
            opacity: 0.5,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
            },
          },
        }}
        className="text-neutral-500 font-medium font-serif tracking-wider"
        >
        {text}
      </motion.p>
    </motion.div>
  );
}
