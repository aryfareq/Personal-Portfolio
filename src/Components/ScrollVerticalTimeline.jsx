import { motion } from "framer-motion";
import timelineData from "../Components/timeline.js";

export default function AlternatingScrollTimeline() {
  return (
    <section className="bg-[#0B1A29FF] text-white">
      {timelineData.map((item, index) => {
        // Reversed start: first item on RIGHT
        const isRight = index % 2 === 0;

        return (
          <div
            key={index}
            className="min-h-screen flex items-center"
          >
            <div className="grid grid-cols-12 w-full px-6 md:px-20">

              {/* YEAR (OPPOSITE SIDE) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`
                  col-span-12 md:col-span-2
                  ${isRight ? "md:col-start-2" : "md:col-start-10"}
                  text-white/40 text-2xl md:text-3xl tracking-widest
                `}
              >
                {item.year}
              </motion.div>

              {/* MAIN CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`
                  col-span-12 md:col-span-5
                  ${isRight ? "md:col-start-8" : "md:col-start-2"}
                  mt-6 md:mt-0
                `}
              >
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                  {item.title}
                </h2>

                <h3 className="text-md md:text-xl text-white/60 mb-5">
                  {item.organization}
                </h3>

                <p className="text-md md:text-xl text-white/80 leading-relaxed max-w-xl">
                  {item.body}
                </p>
              </motion.div>

            </div>
          </div>
        );
      })}

      {/* FULL-WIDTH HORIZONTAL DIVIDER BEFORE FOOTER */}
      <div className="w-screen h-px bg-white/20 mt-24" />
    </section>
  );
}
