import { motion } from "framer-motion";

function IntroLoader() {
  const containerVariants = {
    initial: { top: 0 },
    exit: { 
      top: "-100vh", 
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
        delay: 0.2 
      }
    }
  };

  const textVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const waveVariants = {
    animate: (i) => ({
      scaleY: [0.3, 1.5, 0.3],
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.15,
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1E344C] text-white px-6"
    >
      {/* Container: items-center centers the children horizontally */}
      <div className="flex flex-col items-center max-w-7xl w-full">
        
        <div className="overflow-hidden w-full">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center text-center"
          >
            <h1 className="rubik-h1 text-4xl md:text-7xl font-bold tracking-tighter leading-tight">
              Patience is bitter, but its fruit is sweet.
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full flex justify-center" // Ensures the subtext wrapper is centered
            >
              <p className="rubik-ps text-white/50 mt-6 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px] md:text-sm">
                <span className="h-[1px] w-6 md:w-8 bg-white/20"></span>
                Jean-Jacques Rousseau
                <span className="h-[1px] w-6 md:w-8 bg-white/20"></span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* 5-LINE WAVE */}
        <div className="flex gap-3 h-16 mt-12 items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={waveVariants}
              animate="animate"
              className="w-1.5 h-8 bg-white rounded-full"
              style={{ transformOrigin: "center" }}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default IntroLoader;