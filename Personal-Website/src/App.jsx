import "./App.css";
import Lenis from "@studio-freight/lenis";

import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";

import { motion } from "framer-motion";
import { useEffect } from "react";

/* ----------------------------------------------
   PROGRESSIVE SECTION ANIMATION
---------------------------------------------- */
const pageVariant = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  },
});

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,          // sensitive & fast
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 2.5),
    });

    function raf(time) {
      lenis.raf(time);        // ✅ correct timing
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Landing Section — instant */}
      <motion.div
        variants={pageVariant(0)}
        initial="hidden"
        animate="visible"
      >
        <LandingPage />
      </motion.div>

      {/* About Section — subtle delayed reveal */}
      <motion.div
        variants={pageVariant(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        <AboutPage />
      </motion.div>
    </>
  );
}

export default App;
