'use client';

import { motion } from 'framer-motion';
import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import { profileData } from '@/data/profile';

export default function AboutMe() {
  return (
    <MContainer
      className="max-w-screen-lg text-center mx-auto px-10"
      id="about-me"
    >
      <MHeaderTitle>About Me</MHeaderTitle>
      <motion.pre
        className="text-neutral-700 mt-8 whitespace-pre-line"
        variants={{
          offscreen: {
            y: 100,
          },
          onscreen: {
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.2,
              duration: 0.8,
            },
          },
        }}
      >
        {profileData.aboutMe}
      </motion.pre>
    </MContainer>
  );
}
