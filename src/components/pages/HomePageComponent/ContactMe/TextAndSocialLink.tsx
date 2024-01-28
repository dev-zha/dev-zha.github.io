'use client';

import { motion } from 'framer-motion';
import { SocialLink, socialLinks } from '@/data/profile';
import SocialIconLink from '@/components/shared/SocialIconLink';

export default function TextAndSocialLink() {
  const socialMediaLink = [
    socialLinks.find((sl) => sl.name === 'Linkedin'),
    socialLinks.find((sl) => sl.name === 'Instagram'),
  ].filter(Boolean) as SocialLink[];

  return (
    <div>
      <motion.p
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              type: 'spring',
              bounce: 0.2,
              duration: 1,
            },
          },
        }}
        className="text-neutral-700 text-lg text-center md:text-left  whitespace-pre-line"
      >
        {`Feel free to drop a message or connect through any of these channels. I'm open to collaborations and always happy to chat! Looking forward to hearing from you!`}
      </motion.p>
      <motion.div
        variants={{
          offscreen: {
            opacity: 0,
            y: 50,
          },
          onscreen: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.2,
              duration: 0.3,
            },
          },
        }}
        className="flex justify-center  space-x-4 mt-8"
      >
        {socialMediaLink?.map((sl) => (
          <SocialIconLink key={sl.name} socialLink={sl} />
        ))}
      </motion.div>
    </div>
  );
}
