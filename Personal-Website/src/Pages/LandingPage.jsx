import Ari from "../assets/Images/Ari.png";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <section
      className="relative min-h-screen z-0"
      style={{
        backgroundImage: `url(${Ari})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: "easeOut",
        }}
        className="
          rubik-h1 text-white
          text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px]
          absolute bottom-6 left-6
          leading-none tracking-tight
        "
      >
        Hiwa Fareeq
      </motion.h1>
    </section>
  );
}

export default LandingPage;
