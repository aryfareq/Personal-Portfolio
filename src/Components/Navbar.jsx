import Logo from "../assets/images/Logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* --------------------------------
     SCROLL BEHAVIOR
  -------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setScrolled(scrollY > viewportHeight / 2);

      const footer = document.getElementById("contact");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      setHidden(footerTop < viewportHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Expertise", id: "expertise" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 w-full z-50
          flex justify-between items-center
          px-6 sm:px-10 lg:px-16
          py-4 sm:py-6
          transition-all duration-300
          ${
            scrolled
              ? "bg-[#1A314A]/30 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }
          ${
            hidden
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        {/* LOGO (desktop only) */}
        <img
          src={Logo}
          alt="Logo"
          className="hidden md:block h-9 cursor-pointer"
          onClick={() => scrollTo("about")}
        />

        {/* DESKTOP NAV (PILLS KEPT) */}
        <ul className="hidden md:flex items-center gap-3 ml-auto">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="
                  text-white border-2 border-white
                  rounded-full px-4 py-1
                  hover:bg-white/20 transition
                "
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="
            md:hidden ml-auto
            text-white border-2 border-white
            rounded-full p-2
            hover:bg-white/20
          "
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      </motion.nav>

      {/* MOBILE OVERLAY + DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* SIDE DRAWER */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                fixed top-0 right-0 z-50
                h-full w-[80%] max-w-sm
                bg-[#1A314A]/50 backdrop-blur-xl
                flex flex-col
                md:hidden
              "
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white"
                aria-label="Close menu"
              >
                <FiX size={26} />
              </button>

              {/* HEADER (RECOMMENDATION 1: LOGO) */}
              <div className="flex flex-col items-center mt-20 mb-10">
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-10 mb-4 opacity-90"
                />
                <span className="text-white/50 text-xs tracking-widest uppercase">
                  Navigation
                </span>
              </div>

              {/* LINKS (RECOMMENDATION 2: CLEAN LIST) */}
              <nav className="px-10">
                <ul className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <li
                      key={item.id}
                      className="border-b border-white/20 pb-4"
                    >
                      <button
                        onClick={() => scrollTo(item.id)}
                        className="
                          w-full text-left
                          text-white text-2xl
                          font-medium tracking-wide
                          hover:opacity-70 transition
                        "
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
