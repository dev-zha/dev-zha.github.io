import { motion } from 'framer-motion';
import MobileMenuItem from './MobileMenuItem';
import { navItems } from './data';

const sidebar = {
  open: {
    clipPath: `circle(${1000 * 2 + 200}px at calc(100% - 30px) 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(20px at calc(100% - 30px) 30px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export function MobileMenuBox() {
  return (
    <motion.nav
      className="fixed top-0 right-0 bottom-0 w-full h-screen bg-neutral-100"
      initial={sidebar.closed}
      animate={sidebar.open}
      exit={sidebar.closed}
    >
      <ul className="flex flex-col gap-10 p-10 pt-20">
        {navItems?.map((navItem, index) => (
          <MobileMenuItem key={index} index={index} navItem={navItem} />
        ))}
      </ul>
    </motion.nav>
  );
}
