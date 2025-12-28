import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

/* =========================
   MOTION VARIANTS
========================= */

const aboutContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // tighter stagger
    },
  },
};

const aboutItem = {
  hidden: { opacity: 0, y: 20 }, // slightly less movement
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const aboutCTA = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ribbonMotion = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const ribbonMotionReverse = {
  animate: {
    x: ["-50%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear",
      },
    },
  },
};

/* =========================
   RIBBON COMPONENT
========================= */

function Ribbon({ position = "top", reverse = false }) {
  return (
    <div
      className={`
        absolute ${position === "top" ? "top-0" : "bottom-0"}
        left-0 w-full overflow-hidden
        pointer-events-none
        z-0
      `}
    >
      <motion.div
        className="
          flex whitespace-nowrap
          font-semibold
          tracking-tight
          text-[#1A314A]/5
          select-none
          text-[14vw] sm:text-[15vw] md:text-[15vw] lg:text-[9vw]
        "
        variants={reverse ? ribbonMotionReverse : ribbonMotion}
        animate="animate"
      >
        <span className="px-12">
          SOFTWARE ENGINEERING · FULL STACK · DIGITAL EXPERIENCES ·
        </span>
        <span className="px-12">
          SOFTWARE ENGINEERING · FULL STACK · DIGITAL EXPERIENCES ·
        </span>
      </motion.div>
    </div>
  );
}

/* =========================
   COMPONENT
========================= */

function AboutPage() {
  return (
    <section
      id="about"
      className="
        relative
        w-full min-h-screen
        flex items-center justify-center
        bg-[#ffffff]
        px-6 sm:px-10 lg:px-16
        overflow-hidden
      "
    >
      {/* TOP RIBBON */}
      <Ribbon position="top" />

      {/* BOTTOM RIBBON */}
      <Ribbon position="bottom" reverse />

      {/* CONTENT */}
      <motion.div
        className="
          relative z-10
          max-w-[1100px] mx-auto
          flex flex-col items-center text-center
        "
        variants={aboutContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* MAIN STATEMENT */}
        <motion.h1
          variants={aboutItem}
          className="
            rubik-h1
            text-left sm:text-left md:text-center
            text-[1.1rem] sm:text-[1.15rem] md:text-[1.3rem] lg:text-[1.6rem]
            text-[#1A314A]
            leading-tight
            max-w-[1000px]
          "
        >
          I’m Hiwa — a Software Engineer & Full Stack Developer crafting scalable
          and immersive digital experiences, merging creativity with engineering
          precision.
        </motion.h1>

        {/* SUPPORTING PARAGRAPH */}
        <motion.p
          variants={aboutItem}
          className="
            rubik-ps
            text-[#1A314A]
            text-left md:text-center
            text-[0.9rem] sm:text-[0.95rem] md:text-[1rem]
            max-w-[760px]
            mt-6 sm:mt-8 md:mt-10
            leading-relaxed
          "
        >
          I specialize in developing Websites and Web Applications, AI-driven
          products, and interactive web experiences using modern technologies
          like React, Node.js, Framer Motion, and many more.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={aboutCTA}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <a
            href="src/assets/HiwaFareeqResume.pdf"
            download
            className="
              inline-flex items-center gap-3
              bg-[#1A314A] border-2 border-[#1A314A]
              text-white
              px-6 sm:px-8
              py-3 sm:py-4
              rounded-full
              font-semibold
              text-sm sm:text-base
              transition-all duration-300 ease-out
              hover:bg-white hover:text-[#1A314A]
              hover:border-[#1A314A]
              hover:-translate-y-0.5 hover:shadow-lg
            "
          >
            <FiDownload className="text-lg" />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutPage;
