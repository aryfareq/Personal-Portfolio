import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Projects from "../Components/Projects.jsx";
import { projectsData } from "../Components/Projects.js";

function ProjectsSlider() {
  const containerRef = useRef(null);

  const animatedSlides = projectsData.length - 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] w-screen">
      {/* PINNED AREA */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <div className="relative h-full w-full">

          {/* RENDER ALL SLIDES */}
          {projectsData.map((project, index) => {
            // FIRST SLIDE — static
            if (index === 0) {
              // Darkness driven by slide 1
              const darken = useTransform(
                scrollYProgress,
                [0, 1 / animatedSlides],
                [0, 0.45]
              );

              return (
                <div
                  key={project.name}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: project.bg }}
                >
                  <Projects {...project} />

                  {/* DARKENING OVERLAY */}
                  <motion.div
                    style={{ opacity: darken }}
                    className="absolute inset-0 bg-black pointer-events-none"
                  />
                </div>
              );
            }

            // ALL OTHER SLIDES
            const start = (index - 1) / animatedSlides;
            const end = index / animatedSlides;

            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["100%", "0%"]
            );

            // Darkness for THIS slide comes from NEXT slide
            const darken = index < projectsData.length - 1
              ? useTransform(
                  scrollYProgress,
                  [end, end + 1 / animatedSlides],
                  [0, 0.45]
                )
              : null;

            return (
              <motion.div
                key={project.name}
                style={{ y, backgroundColor: project.bg }}
                className="
                  absolute inset-0
                  flex items-center justify-center
                  w-screen h-screen
                "
              >
                <Projects {...project} />

                {/* DARKEN THIS SLIDE WHEN NEXT SLIDE COMES */}
                {darken && (
                  <motion.div
                    style={{ opacity: darken }}
                    className="absolute inset-0 bg-black pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default ProjectsSlider;
