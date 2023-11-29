import { motion } from 'framer-motion';
import PrimaryButton from '@/components/shared/PrimaryButton';
import { profileData, socialLinks } from '@/data/profile';

export default function Info() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
        }}
        className="text-neutral-600 text-lg sm:text-xl"
      >
        Hello, I am
      </motion.p>
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
        className="text-primary-500 text-3xl sm:text-4xl font-bold uppercase tracking-wider my-2"
      >
        {profileData.name}
      </motion.h1>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="text-neutral-600 text-xl sm:text-2xl font-medium uppercase tracking-widest"
      >
        {profileData.position}
      </motion.p>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          },
        }}
      >
        <PrimaryButton className="mt-8">Download Resume</PrimaryButton>
      </motion.div>
      <div className="flex space-x-4 mt-8">
        {socialLinks?.map((sl) => (
          <a href={sl.link} key={sl.name} target="_blank">
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.7, type: 'spring', bounce: 0.4 },
                },
              }}
            >
              <sl.icon className="w-8 h-8 fill-neutral-800 stroke-neutral-800 hover:fill-neutral-600 hover:stroke-neutral-600 hover:scale-105" />
            </motion.span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
