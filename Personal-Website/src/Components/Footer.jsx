import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import EmailPopup from "./EmailPopup.jsx";

const Year = new Date().getFullYear();

function Footer() {
  // Email popup state
  const [emailOpen, setEmailOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = emailOpen ? "hidden" : "";
  }, [emailOpen]);

  return (
    <>
      <footer
        id="contact"
        className="bg-[#1E344C] text-white px-6 sm:px-10 lg:px-20 py-12 sm:py-16"
      >
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">

          {/* LEFT — CTA */}
          <div className="max-w-xl flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              You Know What Would Be Fun?
            </h2>

            <p className="text-white/80 text-base sm:text-lg">
              Whether it’s a project, internship, or collaboration —
              send a message and let’s build something meaningful.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => setEmailOpen(true)}
                className="
                  bg-white text-[#1E344C]
                  px-6 py-3 rounded-full
                  font-semibold
                  hover:bg-white/90
                  transition
                "
              >
                Email Me
              </button>
            </div>
          </div>

          {/* RIGHT — LINKS */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Links</h3>
              <a href="#about" className="text-white/80 hover:text-white">About</a>
              <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
              <a href="#expertise" className="text-white/80 hover:text-white">Expertise</a>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Socials</h3>
              <a href="https://www.linkedin.com/in/hiwa-fareeq-msalih-hassan/" target="_blank" className="flex items-center gap-2 text-white/80 hover:text-white">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/aryfareq" target="_blank" className="flex items-center gap-2 text-white/80 hover:text-white">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.instagram.com/ari_fareiq/" target="_blank" className="flex items-center gap-2 text-white/80 hover:text-white">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 sm:mt-16 border-t border-white/30" />

        {/* BOTTOM */}
        <div className="text-center mt-6 text-white/70 text-sm">
          © {Year}. All Rights Reserved
        </div>
      </footer>

      {/* EMAIL POPUP */}
      <EmailPopup
        open={emailOpen}
        onClose={() => setEmailOpen(false)}
      />
    </>
  );
}

export default Footer;
