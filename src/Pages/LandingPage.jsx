import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

function LandingPage() {
  return (
    <section
      className="
        relative min-h-screen z-0
        bg-[url('/Ari.avif')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* SCROLL HINT */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-sm tracking-wide"
        >
          <span className="rubik-h2 text-[large]">Scroll to explore</span>
          <FiArrowDown className="text-lg" />
        </motion.span>
      </motion.div>
    </section>
  );
}

export default LandingPage;
