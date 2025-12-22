import Logo from "../assets/Images/Logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* -------------------------------
     APPLY BACKGROUND AFTER SCROLL
  -------------------------------- */
useEffect(() => {
  const onScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // 🔹 background appears after half screen
    setScrolled(scrollY > viewportHeight / 2);

    // 🔹 hide navbar when footer is reached
    const footer = document.getElementById("contact");
    if (!footer) return;

    const footerTop = footer.getBoundingClientRect().top;

    // when footer is entering the viewport
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
  ${scrolled
    ? "bg-neutral-primary/85 backdrop-blur-md shadow-lg"
    : "bg-transparent"}
  ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
`}
    >
      {/* LOGO */}
      <img
        src={Logo}
        alt="Logo"
        className="h-8 sm:h-9 md:h-10 cursor-pointer"
        onClick={() => scrollTo("about")}
      />

      {/* DESKTOP NAV */}
      <ul className="hidden md:flex items-center gap-3">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className="
                text-white
                border-2 border-white
                rounded-full
                px-4 py-1
                text-sm md:text-base
                hover:bg-gray-200/25
                transition-colors
              "
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* HAMBURGER */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="
          md:hidden
          text-white
          border-2 border-white
          rounded-full
          p-2
          hover:bg-gray-200/25
        "
        aria-label="Toggle menu"
      >
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              absolute top-full left-0 w-full
              bg-neutral-primary/95 backdrop-blur-md
              flex flex-col items-center gap-4
              py-6 md:hidden
            "
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="
                    text-white
                    border-2 border-white
                    rounded-full
                    px-6 py-2
                    text-base
                    hover:bg-gray-200/25
                  "
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
