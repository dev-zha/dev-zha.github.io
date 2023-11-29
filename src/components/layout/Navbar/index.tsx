import React from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { navItems } from './data';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-neutral-100/30 backdrop-blur z-20 top-0 start-0 border-b border-neutral-500/30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/">
          <svg
            className="w-10 h-10 bg-white hover:bg-primary-500 fill-black hover:fill-white rounded-full hover:scale-110 transform transition-transform duration-300 ease-in-out"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M224.506 213.246L163.487 318.934H163.572L154.097 335.345L175.7 372.762L206.778 318.934H225.678L194.6 372.762H237.806L268.884 318.934H347.716L378.794 372.762H422L308.3 175.829L247.281 281.516H228.381L289.399 175.829H289.314L298.789 159.417L277.187 122L246.109 175.829H62L83.6029 213.246H224.506ZM308.3 250.663L326.113 281.516H290.487L308.3 250.663Z"
            />
          </svg>
        </Link>
        <ul className="hidden sm:flex space-x-4 me-4">
          {navItems?.map((navItem) => (
            <li key={navItem.title}>
              <Link
                href={navItem.link}
                className="text-neutral-600 hover:text-primary-500 text-lg font-semibold"
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
        <MobileMenu />
      </div>
    </nav>
  );
}
