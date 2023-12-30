import Link from 'next/link';
import { motion } from 'framer-motion';
import { NavItem } from './data';

interface MobileMenuItemProps {
  navItem: NavItem;
  index: number;
  onClick: () => void;
}

export default function MobileMenuItem({
  navItem,
  index,
  onClick,
}: MobileMenuItemProps) {
  return (
    <motion.li
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.1 * index } }}
      exit={{ x: 300, opacity: 0, transition: { delay: 0.2 - 0.1 * index } }}
    >
      <Link
        href={navItem.link}
        onClick={onClick}
        className="text-primary-500 text-2xl font-semibold"
      >
        <div className="inline-flex items-center gap-3">
          <span>
            <navItem.icon className="w-7 h-7" />
          </span>
          <span>{navItem.title}</span>
        </div>
      </Link>
    </motion.li>
  );
}
