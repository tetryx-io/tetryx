'use client'
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      // key={"/studio/build/[id]"}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
      className="h-[calc(100vh-58px)] w-full"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
