import { motion } from "framer-motion";
import { useRef } from "react";
import Experience from "../Components/Experience.jsx";
import { experiencesData } from "../Components/experiencesData.js";

function ExperiencesSlider() {
  const trackRef = useRef(null);
  const slidesCount = experiencesData.length;

  return (
    <section className="w-screen h-[50vh] overflow-hidden my-10">
      <motion.div
        ref={trackRef}
        drag="x"
        dragElastic={0.08}
        dragMomentum={true}
        dragConstraints={{
          left: -((slidesCount - 2) * window.innerWidth * 0.5),
          right: 0,
        }}
        className="flex h-full cursor-grab active:cursor-grabbing"
        style={{
          width: `${slidesCount * 50}vw`,
        }}
      >
        {experiencesData.map((exp, i) => (
          <div
            key={i}
            className="w-[50vw] h-full flex-shrink-0 border-r border-slate-300/60"
          >
            <Experience {...exp} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default ExperiencesSlider;
