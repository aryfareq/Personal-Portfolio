import Logo from "../assets/Images/Logo.svg";
import { motion } from "framer-motion";

/* ----------------------------------------------
   NAVBAR ANIMATION
---------------------------------------------- */
const navbarVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

function Navbar() {
  return (
    <motion.nav
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      className="flex justify-between items-center p-10 z-10 absolute w-full"
    >
      <img src={Logo} alt="Logo" className="logo" />

      <ul className="flex justify-center items-center gap-2">
        <li>
          <button className="text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1 transition-colors">
            About
          </button>
        </li>
        <li>
          <button className="text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1 transition-colors">
            Expertise
          </button>
        </li>
        <li>
          <button className="text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1 transition-colors">
            Projects
          </button>
        </li>
        <li>
          <button className="text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1 transition-colors">
            Contact
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
