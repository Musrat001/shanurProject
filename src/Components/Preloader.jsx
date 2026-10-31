import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const interval = 20;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 300);
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111111] px-6 text-white"
    >

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl"
      >
        THE HYPE<span className="text-orange-500">.</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-5 text-xs font-medium uppercase tracking-[0.3em] text-gray-400"
      >
        Creative Digital Agency
      </motion.p>

      {/* Loading Section */}
      <div className="mt-20 w-full max-w-md">

        {/* Percentage */}
        <div className="mb-4 flex items-center justify-between">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Loading Experience
          </p>

          <p className="text-sm font-bold text-orange-500">
            {Math.round(progress)}%
          </p>

        </div>

        {/* Progress Bar */}
        <div className="h-[3px] w-full overflow-hidden bg-white/10">

          <motion.div
            className="h-full bg-orange-500"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      {/* Bottom Text */}
      <p className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-gray-600">
        Think. Create. Inspire.
      </p>

    </motion.div>
  );
};

export default Preloader;