import "./App.css";
import Lenis from "@studio-freight/lenis";

import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";

import { motion } from "framer-motion";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 2.5),
    });

    lenis.scrollTo(0, { immediate: true });

    function raf(time) {
      lenis.raf(time);
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

      {/* Background layer */}
      <LandingPage />

      {/* Foreground layer — slides OVER landing */}
      <motion.section
        initial={{
          y: 80,
        }}
        whileInView={{
          y: -100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        viewport={{ margin: "-200px" }}
        className="
          relative z-10
          -mt-40
          bg-[#E6E9EC]
          shadow-[0_-30px_80px_rgba(0,0,0,0.15)]
        "
      >
        <AboutPage />
      </motion.section>
    </>
  );
}

export default App;
