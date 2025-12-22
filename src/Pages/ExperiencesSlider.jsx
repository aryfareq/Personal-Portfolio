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

  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current || !slideRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const singleSlideWidth = slideRef.current.offsetWidth;
      const totalWidth = singleSlideWidth * experiencesData.length;

      setSlideWidth(singleSlideWidth);
      setDragLimit(Math.max(totalWidth - containerWidth, 0));
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const handleDragEnd = (_, info) => {
    const currentX = x.get();
    const velocity = info.velocity.x;

    let targetIndex = Math.round(Math.abs(currentX) / slideWidth);

    // velocity-based snap
    if (velocity < -500) targetIndex += 1;
    if (velocity > 500) targetIndex -= 1;

    targetIndex = Math.max(0, Math.min(targetIndex, experiencesData.length - 1));

    const targetX = -targetIndex * slideWidth;

    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <section id="expertise" className="w-screen my-16 md:my-24">
      {/* TITLE */}
      <h1 className="rubik-h1 text-2xl sm:text-3xl md:text-4xl text-center">
        Places I Worked
      </h1>

      <p className="rubik-ps text-center text-slate-500 mt-2 mb-6 flex items-center justify-center gap-2">
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
          drag="x"
          style={{ x }}
          dragElastic={0.08}
          dragMomentum
          dragConstraints={{ left: -dragLimit, right: 0 }}
          onDragEnd={handleDragEnd}
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
