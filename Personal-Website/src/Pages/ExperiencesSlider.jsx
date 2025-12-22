import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Experience from "../Components/Experience.jsx";
import { experiencesData } from "../Components/experiencesData.js";

function ExperiencesSlider() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const calculateLimit = () => {
      if (!containerRef.current || !slideRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const slideWidth = slideRef.current.offsetWidth;
      const totalWidth = slideWidth * experiencesData.length;

      setDragLimit(Math.max(totalWidth - containerWidth, 0));
    };

    calculateLimit();
    window.addEventListener("resize", calculateLimit);
    return () => window.removeEventListener("resize", calculateLimit);
  }, []);

  return (
    <section id="expertise" className="w-screen my-16 md:my-24">
      {/* TITLE */}
      <h1 className="rubik-h1 text-2xl sm:text-3xl md:text-4xl text-center">
        Places I Worked
      </h1>

      <p className="rubik-ps text-center text-slate-500 mt-2 mb-6 flex items-center justify-center gap-2 text-sm sm:text-base">
        <FiArrowLeft />
        Drag to See
        <FiArrowRight />
      </p>

      {/* SLIDER */}
      <div
        ref={containerRef}
        className="w-screen h-[65vh] sm:h-[55vh] overflow-hidden"
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragElastic={0.08}
          dragMomentum
          dragConstraints={{ left: -dragLimit, right: 0 }}
          className="flex h-full cursor-grab active:cursor-grabbing select-none"
        >
          {experiencesData.map((exp, i) => (
            <div
              key={i}
              ref={i === 0 ? slideRef : null}
              className="
                w-screen md:w-[50vw]
                h-full flex-shrink-0
                border-r border-slate-300/60
              "
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
