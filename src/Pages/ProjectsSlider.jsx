import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Projects from "../Components/Projects.jsx";
import { projectsData } from "../Components/Projects.js";

function ProjectsSlider() {
  const containerRef = useRef(null);
  const isSnapping = useRef(false);

  const animatedSlides = projectsData.length - 1;

  /* ----------------------------------
     SCROLL PROGRESS
  ---------------------------------- */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ----------------------------------
     MOBILE SWIPE SUPPORT
  ---------------------------------- */
  const swipeY = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const snapToIndex = (index) => {
    const clamped = Math.max(0, Math.min(animatedSlides, index));
    setActiveIndex(clamped);

    const section = containerRef.current;
    if (!section) return;

    const maxScroll = section.offsetHeight - window.innerHeight;

    animate(swipeY, 0, { duration: 0 });

    window.scrollTo({
      top:
        section.offsetTop +
        (clamped / animatedSlides) * maxScroll,
      behavior: "smooth",
    });
  };

  /* ----------------------------------
     DESKTOP SNAP SCROLL 🔥
  ---------------------------------- */
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const onWheel = (e) => {
      const rect = section.getBoundingClientRect();

      // only snap while section is pinned
      if (rect.top > 0 || rect.bottom < window.innerHeight) return;

      e.preventDefault();

      if (isSnapping.current) return;
      isSnapping.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;

      const scrollTop = window.scrollY - section.offsetTop;
      const maxScroll = section.offsetHeight - window.innerHeight;

      const currentIndex = Math.round(
        (scrollTop / maxScroll) * animatedSlides
      );

      snapToIndex(currentIndex + direction);

      setTimeout(() => {
        isSnapping.current = false;
      }, 850);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [animatedSlides]);

  /* ----------------------------------
     MOBILE SWIPE HANDLER
  ---------------------------------- */
  const handleSwipeEnd = (_, info) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;

    let next = activeIndex;

    if (offset < -80 || velocity < -500) next += 1;
    if (offset > 80 || velocity > 500) next -= 1;

    snapToIndex(next);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-[350vh] sm:h-[300vh] w-screen"
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
                {/* MOBILE SWIPE LAYER */}
                <motion.div
                  className="absolute inset-0 md:hidden"
                  drag="y"
                  dragElastic={0.15}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  onDragEnd={handleSwipeEnd}
                  style={{ y: swipeY }}
                />

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
