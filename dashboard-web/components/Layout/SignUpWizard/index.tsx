import React from "react";
import { motion } from "framer-motion";

export default ({ children, sideNavOpen }) => {

  return (
    <div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 1260,
          damping: 120,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
