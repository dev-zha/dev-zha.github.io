import { classNames } from '@/utils/helper';
import { motion } from 'framer-motion';

interface MContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function MContainer({
  children,
  className = '',
  id = '',
}: MContainerProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={{
        onscreen: {
          transition: { staggerChildren: 0.5 },
        },
      }}
      viewport={{ once: true }}
      className={classNames(
        'flex flex-col items-center justify-center my-16 py-16',
        className
      )}
      id={id}
    >
      {children}
    </motion.div>
  );
}
