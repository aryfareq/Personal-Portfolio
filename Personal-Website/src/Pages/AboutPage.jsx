import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";


function AboutPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] px-10">
      <motion.div
        className="max-w-[1100px] mx-auto flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.30,
            },
          },
        }}
      >

        {/* =========================
            MAIN STATEMENT
        ========================= */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rubik-h1 text-[2rem] md:text-[2rem] text-[#1A314A] leading-tight max-w-[1000px]"
        >
          I’m Hiwa — a Full Stack Developer crafting fast, scalable, and
          immersive digital experiences that merge creativity with engineering
          precision.
        </motion.h1>

        {/* =========================
            SUPPORTING PARAGRAPH
        ========================= */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rubik-ps text-[#1A314A] text-[1rem] max-w-[780px] mt-16 leading-relaxed"
        >
          I specialize in developing Websites and Web Applications, AI-driven products, and
          interactive web experiences using modern technologies like React,
          Node.js, Framer motion, and many more!
        </motion.p>

        {/* =========================
    CTA
========================= */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className="mt-20"
>
  <a
    href="/Hiwa-CV.pdf"   // 👈 put your CV in /public
    download
    className="
      inline-flex items-center gap-3
      bg-[#1A314A] border-2 border-[#ffffff]
      text-[#ffffff]
      px-8 py-4
      rounded-full
      font-semibold
      hover:text-[#1A314A]
      hover:bg-[#ffffff]
      hover:border-2
      hover:border-[#1A314A]
      transition-colors
      duration-200 ease-in-out
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
