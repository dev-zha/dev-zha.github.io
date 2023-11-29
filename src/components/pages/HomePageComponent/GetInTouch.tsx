import { motion } from 'framer-motion';
import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import PrimaryButton from '@/components/shared/PrimaryButton';

export default function GetInTouch() {
  return (
    <MContainer className="max-w-screen-md text-center mx-auto px-10" id="contact">
      <MHeaderTitle>Get In Touch</MHeaderTitle>
      <motion.p
        className="text-neutral-700 text-lg mt-8 whitespace-pre-line"
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
        className="mt-4"
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
        <PrimaryButton>Say Hello</PrimaryButton>
      </motion.div>
    </MContainer>
  );
}
