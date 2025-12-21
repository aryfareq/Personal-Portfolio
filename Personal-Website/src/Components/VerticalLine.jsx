import { motion } from "framer-motion";

function VerticalLine({ width = 4, color = "currentColor" }) {
  return (
    <motion.div
      className="absolute left-0 top-0 bottom-0 rounded-full"
      style={{
        width,
        backgroundColor: color,
        transformOrigin: "top",
      }}
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}

export default VerticalLine;
