'use client';

import { motion, AnimatePresence } from 'framer-motion';


export default function RootLayout({ children }) {

  return (
    <AnimatePresence>
      <motion.div
        key={"/studio/build/[id]"}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        className="h-[calc(100vh-58px)] w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}