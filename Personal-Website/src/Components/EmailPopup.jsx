import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail } from "react-icons/fi";

function EmailPopup({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 text-[#1E344C]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
                aria-label="Close"
              >
                <FiX size={22} />
              </button>

              {/* CONTENT */}
              <div className="text-center py-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-4"
                >
                  <FiMail className="text-4xl text-[#1E344C]" />
                </motion.div>

                <h2 className="text-2xl font-bold mb-3">
                  Email Coming Soon
                </h2>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  Sorry, I’m currently learning how to properly integrate
                  email features. I’ll be back soon!
                  <br />
                  <br />
                  In the meantime, feel free to reach out directly at:
                </p>

                <a
                  href="mailto:hiwa.fareeq03@gmail.com"
                  className="inline-block text-lg font-semibold text-[#1E344C] hover:underline"
                >
                  hiwa.fareeq03@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default EmailPopup;




// Previous Code


// import { motion, AnimatePresence } from "framer-motion";
// import { FiX, FiSend, FiAlertCircle } from "react-icons/fi";
// import { useState } from "react";

// function EmailPopup({ open, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null); // null | "generic" | "limit"

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         if (res.status === 429 && data.error === "LIMIT_REACHED") {
//           setError("limit");
//           return;
//         }
//         throw new Error("Failed");
//       }

//       setSuccess(true);
//       setForm({ name: "", email: "", message: "" });
//     } catch {
//       setError("generic");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* BACKDROP */}
//           <motion.div
//             className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* MODAL */}
//           <motion.div
//             className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div
//               className="
//                 relative w-full max-w-lg
//                 rounded-2xl bg-white
//                 p-6 sm:p-8
//                 text-[#1E344C]
//               "
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* CLOSE */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
//                 aria-label="Close"
//               >
//                 <FiX size={22} />
//               </button>

//               {/* ======================
//                   FORM STATE
//               ====================== */}
//               {!success && !error && (
//                 <>
//                   <h2 className="text-2xl font-bold mb-1">
//                     Send me a message
//                   </h2>

//                   <p className="text-slate-600 text-sm mb-6">
//                     I’ll get back to you as soon as possible.
//                   </p>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       required
//                       value={form.name}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-4 py-3"
//                     />

//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       required
//                       value={form.email}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-4 py-3"
//                     />

//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       rows={5}
//                       required
//                       value={form.message}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-4 py-3 resize-none"
//                     />

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="
//                         w-full bg-[#1E344C] text-white
//                         py-3 rounded-full
//                         font-semibold
//                         hover:bg-[#1E344C]/90
//                         transition
//                       "
//                     >
//                       {loading ? "Sending..." : "Send Message"}
//                     </button>
//                   </form>
//                 </>
//               )}

//               {/* ======================
//                   SUCCESS STATE
//               ====================== */}
//               {success && (
//                 <div className="text-center py-12">
//                   <motion.div
//                     initial={{ scale: 0.8, opacity: 0, y: 10 }}
//                     animate={{ scale: 1, opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="flex justify-center mb-4"
//                   >
//                     <motion.div
//                       animate={{ y: [0, -6, 0] }}
//                       transition={{
//                         duration: 1.6,
//                         ease: "easeInOut",
//                         repeat: Infinity,
//                       }}
//                     >
//                       <FiSend className="text-4xl text-[#1E344C]" />
//                     </motion.div>
//                   </motion.div>

//                   <h3 className="text-xl font-semibold mb-2">
//                     MESSAGE SENT
//                   </h3>

//                   <p className="text-slate-600">
//                     Thanks for reaching out!
//                   </p>
//                 </div>
//               )}

//               {/* ======================
//                   ERROR STATE
//               ====================== */}
//               {error && (
//                 <div className="text-center py-12">
//                   <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex justify-center mb-4"
//                   >
//                     <FiAlertCircle className="text-4xl text-red-500" />
//                   </motion.div>

//                   <h3 className="text-xl font-semibold mb-2 text-red-600">
//                     {error === "limit" ? "LIMIT REACHED" : "MESSAGE FAILED"}
//                   </h3>

//                   <p className="text-slate-600 mb-6">
//                     {error === "limit"
//                       ? "You can only send up to 3 messages."
//                       : "Something went wrong. Please try again."}
//                   </p>

//                   {error !== "limit" && (
//                     <button
//                       onClick={() => setError(null)}
//                       className="
//                         px-6 py-2 rounded-full
//                         bg-[#1E344C] text-white
//                         font-semibold
//                         hover:bg-[#1E344C]/90
//                         transition
//                       "
//                     >
//                       Try Again
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

// export default EmailPopup;
