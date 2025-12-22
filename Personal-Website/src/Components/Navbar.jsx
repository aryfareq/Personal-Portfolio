import Logo from "../assets/Images/Logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navbarVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
  },
};

const menuVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false); // close mobile menu
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Expertise", id: "expertise" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className="
        absolute w-full z-50
        flex justify-between items-center
        px-6 sm:px-10 lg:px-16
        py-6 sm:py-8 lg:py-10
      "
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
                text-white bg-neutral-primary
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
            variants={menuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
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
