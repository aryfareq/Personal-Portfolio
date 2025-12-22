import { motion } from "framer-motion";

function IntroLoader() {
  return (
    <motion.div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#1E344C] text-white
      "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="rubik-h1 text-4xl md:text-6xl font-bold">
          Hiwa
        </h1>

        <p className="rubik-ps text-white/70 mt-2">
          Full Stack Developer
        </p>
      </motion.div>
    </motion.div>
  );
}

export default IntroLoader;
