'use client';

import { motion } from 'framer-motion';
import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import Button from '@/components/shared/button/Button';
import { profileData } from '@/data/profile';
import { PiHandWaving,PiHandWavingFill } from 'react-icons/pi';

export default function GetInTouch() {
  return (
    <MContainer
      className="max-w-screen-md text-center mx-auto px-10"
      id="contact"
    >
      <MHeaderTitle>Get In Touch</MHeaderTitle>
      <motion.p
        className="text-neutral-700 text-lg mt-4 whitespace-pre-line"
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
        {
          'My inbox is always open.\nWhether you have a question or just want to say hi,\nI’ll try my best to get back to you!'
        }
      </motion.p>
      <motion.div
        className="mt-6"
        variants={{
          offscreen: {
            scale: 0,
          },
          onscreen: {
            scale: 1,
            transition: {
              type: 'spring',
              bounce: 0.2,
              duration: 0.8,
            },
          },
        }}
      >
        <Button
          href={`mailto:${profileData.email}`}
          target="_blank"
          className="group flex items-center"
        >
          <span>Say Hello</span>
          <PiHandWavingFill className="w-5 h-5 ml-2 group-hover:rotate-45 transition ease-out" />
        </Button>
      </motion.div>
    </MContainer>
  );
}
