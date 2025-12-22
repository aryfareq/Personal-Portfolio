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
          ${scrolled ? "bg-[#1A314A]/30 backdrop-blur-md shadow-md" : "bg-transparent"}
          ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        {/* LOGO — hidden on mobile */}
        <img
          src={Logo}
          alt="Logo"
          className="hidden md:block h-9 cursor-pointer"
          onClick={() => scrollTo("about")}
        />

        {/* DESKTOP NAV */}
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

      {/* MOBILE OVERLAY + SIDE DRAWER */}
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

            {/* SIDE MENU */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                fixed top-0 right-0 z-50
                h-full w-[80%] max-w-sm
                bg-[#1A314A]/40 backdrop-blur-xl
                flex flex-col items-center justify-center
                gap-6
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

              {/* LINKS */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="
                    text-white text-lg
                    border-2 border-white
                    rounded-full
                    px-8 py-2
                    hover:bg-white/20
                    transition
                  "
                >
                  {item.label}
                </button>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
