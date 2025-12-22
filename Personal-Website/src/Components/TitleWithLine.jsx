import { motion } from "framer-motion";

function TitleWithLine({ title }) {
  return (
    <div className="mt-6 rubik-h2 w-full">
      {/* Title */}
      <motion.h2
        className="text-4xl font-semibold text-[#1A314A]"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {title}
      </motion.h2>

      {/* Underline */}
      <svg
        viewBox="0 0 300 4"
        className="my-3 w-1/2 max-w-full"
        aria-hidden
      >
        <motion.line
          x1="0"
          y1="2"
          x2="300"
          y2="2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
        />
      </svg>
    </div>
  );
}

export default TitleWithLine;
