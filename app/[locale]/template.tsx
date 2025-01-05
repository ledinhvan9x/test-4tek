'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  enter: { opacity: 1, scale: 1 },
};

export default function Template({ children }: Props) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      key="Animation Page"
    >
      {children}
    </motion.main>
  );
}
