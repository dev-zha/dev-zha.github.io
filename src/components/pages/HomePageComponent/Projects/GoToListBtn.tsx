'use client';

import { motion } from 'framer-motion';
import GoToLinkBtn from '@/components/shared/button/GoToLinkBtn';

export default function GoToListBtn() {
  return (
    <motion.div
      variants={{
        offscreen: {
          x: -30,
        },
        onscreen: {
          x: 0,
          transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.8,
          },
        },
      }}
      className="flex justify-center mt-8"
    >
      <GoToLinkBtn href="/projects">Explore More Projects</GoToLinkBtn>
    </motion.div>
  );
}
