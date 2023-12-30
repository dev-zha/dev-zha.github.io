'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AppLoading() {
  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 3 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, type: 'spring', bounce: 0.4 },
          },
        }}
        className="bg-primary text-white rounded-full w-24 sm:w-40 h-24 sm:h-40"
      >
        <motion.svg
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.7 } },
          }}
          className="w-full h-full"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="logo-ani-A"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M427.999 381.4L314.299 184.467L200.6 381.4H243.805L314.299 259.302L384.793 381.4H427.999Z"
          />
          <path
            id="logo-ani-H"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M283.186 130.638L169.486 327.572L396.885 327.572L375.283 290.154L234.295 290.154L304.789 168.056L283.186 130.638Z"
          />
          <path
            id="logo-ani-Z"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M181.7 381.4L295.4 184.467L68.0003 184.467L89.6032 221.884L230.591 221.884L160.097 343.983L181.7 381.4Z"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
