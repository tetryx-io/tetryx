import { motion } from "framer-motion";

const AgentNotFound = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-70" />
        <img
          src="https://test1-emgndhaqd0c9h2db.a01.azurefd.net/images/e5a146a6-d70d-452c-b121-5f16b0520cde.png"
          alt="Agent not found background"
          className="w-full h-full object-cover object-center filter blur-sm brightness-75"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-4">Agent Not Found</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl max-w-md mx-auto"
          >
            The agent you're looking for doesn't exist, has been removed, or you
            don't have access to it.
          </motion.p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </motion.button>
      </div>
    </div>
  );
};

export default AgentNotFound;
