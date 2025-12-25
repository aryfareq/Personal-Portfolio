import "./App.css";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProjectsSlider from "./Pages/ProjectsSlider.jsx";
import ToolsMarquee from "./Pages/ToolsMarquee.jsx";
import ExperiencesSlider from "./Pages/ExperiencesSlider.jsx";
import Footer from "./Components/Footer.jsx";
import IntroLoader from "./Components/IntroLoader.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  /* ----------------------------------
      INTRO LOADER (EVERY REFRESH)
  ---------------------------------- */
  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = "";
    }, 2500); // ⏱ matching the loader animations

    return () => clearTimeout(timer);
  }, []);

  /* ----------------------------------
      LENIS SMOOTH SCROLL
  ---------------------------------- */
  useEffect(() => {
    if (showIntro) return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2, // Slightly slower for a more premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easing
      smoothWheel: true,
      smoothTouch: false,
    });

    window.__lenis = lenis;
    window.dispatchEvent(new Event("lenis-ready"));

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [showIntro]);

  return (
    <>
      {/* 1. INTRO LOADER */}
      <AnimatePresence mode="wait">
        {showIntro && <IntroLoader key="loader" />}
      </AnimatePresence>

      {/* 2. MAIN SITE */}
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Navbar />

            <LandingPage />

            {/* ABOUT — OVERLAP IS PURE CSS */}
            <section
              className="
                relative z-20 
                bg-[#E6E9EC] 
                shadow-[0_-30px_80px_rgba(0,0,0,0.15)]
              "
            >
              <AboutPage />
            </section>

            <ProjectsSlider />
            <ToolsMarquee />
            <ExperiencesSlider />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
