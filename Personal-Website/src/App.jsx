import "./App.css";
import Lenis from "@studio-freight/lenis";

import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProjectsSlider from "./Pages/ProjectsSlider.jsx";
import ToolsMarquee from "./Pages/ToolsMarquee.jsx";
import ExperiencesSlider from "./Pages/ExperiencesSlider.jsx";
import Footer from "./Components/Footer.jsx";
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

    // ✅ expose globally for ProjectsSlider
    window.__lenis = lenis;
    window.dispatchEvent(new Event("lenis-ready"));

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />

      {/* LANDING */}
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

      {/* PROJECTS */}
      <ProjectsSlider />
      <ToolsMarquee />
      <ExperiencesSlider />
      <Footer />
    </>
  );
}

export default App;
