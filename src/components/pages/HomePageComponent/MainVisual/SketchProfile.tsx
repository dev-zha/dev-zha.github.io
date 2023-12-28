import { motion } from 'framer-motion';

export default function SketchProfile() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-full"
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.div
        className="w-full h-full"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 },
          },
        }}
      >
        <img
          className="w-full h-full object-contain"
          src="images/zha-profile-sketch.png"
          alt="Zaw Htet Aung - Sketch Image"
        />
      </motion.div>
    </motion.div>
  );
}
