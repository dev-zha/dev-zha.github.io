import Link from 'next/link';
import { motion } from 'framer-motion';
import { NavItem } from './data';

interface MobileMenuItemProps {
  navItem: NavItem;
  index: number;
}
export default function MobileMenuItem({
  navItem,
  index,
}: MobileMenuItemProps) {
  return (
    <motion.li
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.1 * index } }}
      exit={{ x: 300, opacity: 0, transition: { delay: 0.2 - 0.1 * index } }}
      >
      <Link
        href={navItem.link}
        className="text-primary-500 text-3xl font-bold"
      >
        {navItem.title}
      </Link>
    </motion.li>
  );
}
