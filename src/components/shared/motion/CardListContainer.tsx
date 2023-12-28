'use client';

import { motion } from 'framer-motion';

interface CardListContainerProps {
  children: React.ReactNode;
}

export default function CardListContainer({
  children,
}: CardListContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut' },
      }}
    >
      {children}
    </motion.div>
  );
}
