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
    <section
      id="projects"
      ref={containerRef}
      className="
        relative
        h-[350vh] sm:h-[300vh]
        w-screen
      "
    >
      {/* PINNED AREA */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <div className="relative h-full w-full">
          {projectsData.map((project, index) => {
            // FIRST SLIDE
            if (index === 0) {
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

                  <motion.div
                    style={{ opacity: darken }}
                    className="absolute inset-0 bg-black pointer-events-none"
                  />
                </div>
              );
            }

            // OTHER SLIDES
            const start = (index - 1) / animatedSlides;
            const end = index / animatedSlides;

            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["100%", "0%"]
            );

            const darken =
              index < projectsData.length - 1
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
                className="absolute inset-0 flex items-center justify-center w-screen h-screen"
              >
                <Projects {...project} />

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
