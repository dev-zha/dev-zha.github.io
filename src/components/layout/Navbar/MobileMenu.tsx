'use client';

import { useState, useEffect } from 'react';
import { useAnimate, AnimatePresence } from 'framer-motion';
import { MobileMenuBox } from './MobileMenuBox';
import MobileMenuToggle from './MobileMenuToggle';

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return scope;
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope} className="block sm:hidden">
      <AnimatePresence>{isOpen && <MobileMenuBox />}</AnimatePresence>
      <MobileMenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}
