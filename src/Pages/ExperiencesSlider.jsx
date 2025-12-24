import { motion, useMotionValue, animate } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Experience from "../Components/Experience.jsx";
import { experiencesData } from "../Components/experiencesData.js";

function ExperiencesSlider() {
  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const x = useMotionValue(0);

  const [dragLimit, setDragLimit] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current || !slideRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const singleSlideWidth = slideRef.current.offsetWidth;
      const totalWidth = singleSlideWidth * experiencesData.length;

      setIsMobile(window.innerWidth < 768);
      setSlideWidth(singleSlideWidth);
      
      // Calculate limit so the last slide stops at the right edge
      const limit = Math.max(totalWidth - containerWidth, 0);
      setDragLimit(limit);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const handleDragEnd = (_, info) => {
    if (!isMobile) return;
    const currentX = x.get();
    const velocity = info.velocity.x;

    let targetIndex = Math.round(Math.abs(currentX) / slideWidth);
    if (velocity < -500) targetIndex += 1;
    if (velocity > 500) targetIndex -= 1;

    const maxIndex = experiencesData.length - 1;
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex));

    animate(x, -targetIndex * slideWidth, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <section id="expertise" className="w-screen my-16 md:my-24 overflow-hidden">
      {/* TITLE */}
      <h1 className="rubik-h1 text-2xl sm:text-3xl md:text-4xl text-center">
        Places I Worked
      </h1>

      {/* INTERACTION HINT */}
      <p className="rubik-ps text-center text-slate-500 mt-2 mb-6 flex items-center justify-center gap-2">
        <FiArrowLeft />
        {isMobile ? "Drag to See" : "Scroll to See"}
        <FiArrowRight />
      </p>

      {/* SLIDER CONTAINER */}
      <div
        ref={containerRef}
        className={`w-screen h-[65vh] sm:h-[55vh] relative ${
          isMobile 
            ? "overflow-hidden" 
            : "overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
        }`}
      >
        <motion.div
          drag={isMobile ? "x" : false}
          style={isMobile ? { x } : {}}
          dragElastic={0.08}
          dragConstraints={{ left: -dragLimit, right: 0 }}
          onDragEnd={handleDragEnd}
          className="flex h-full cursor-grab active:cursor-grabbing select-none"
        >
          {experiencesData.map((exp, i) => (
            <div
              key={i}
              ref={i === 0 ? slideRef : null}
              className={`
                w-screen md:w-[50vw]
                h-full flex-shrink-0
                border-r border-slate-300/60
                ${!isMobile ? "snap-start" : ""} 
              `}
            >
              <Experience {...exp} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ExperiencesSlider;