import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "../Components/Projects.jsx";
import { projectsData } from "../Components/Projects.js";

const SLIDE_DURATION = 5000; // 5 seconds per slide

function ProjectsSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  /* ----------------------------------
     AUTO SLIDE TIMER
  ---------------------------------- */
  useEffect(() => {
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(percentage);
    }, 50);

    const slideTimeout = setTimeout(() => {
      setIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [index]);

  return (
    <section className="h-[55vh] w-screen relative overflow-hidden">
  {/* 🌊 STATIC ANIMATED BACKGROUND */}
  <div className="absolute inset-0 animated-gradient" />

  {/* 🎞 SLIDES (move independently) */}
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      className="relative z-10 w-screen h-full"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Projects {...projectsData[index]} />
    </motion.div>
  </AnimatePresence>

  {/* UI stays on top */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
    {projectsData.map((_, i) => (
      <span
        key={i}
        className={`h-[3px] w-10 rounded-full ${
          i <= index ? "bg-white" : "bg-white/30"
        }`}
      />
    ))}
  </div>
</section>

  );
}

export default ProjectsSlider;
