import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f0e9] px-5 py-28 md:px-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff4d9]/85 via-[#ffe5dc]/85 to-[#f8d9d9]/85" />

        {/* Additional Overlay */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-orange-400" />
      <div className="pointer-events-none absolute right-[20%] top-[35%] h-2 w-2 rounded-full bg-orange-500" />
      <div className="pointer-events-none absolute bottom-[25%] left-[25%] h-1.5 w-1.5 rounded-full bg-orange-400" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1250px] text-center">
        {/* Intro Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-600 sm:text-sm md:text-base">
            Creative Digital Agency
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-7"
        >
          <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-8xl">
            We Build Timeless
            <span className="my-2 block bg-gradient-to-r from-orange-400 to-[#ff5733] bg-clip-text text-transparent">
              Digital Experiences
            </span>
            That People Remember
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:text-xl md:leading-9"
        >
          We combine creativity, technology, and strategy to craft meaningful
          digital experiences that help businesses grow, connect with people,
          and stand out in the digital world.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#work"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-400 to-[#ff5733] px-10 py-5 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
          >
            <Sparkles
              size={21}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            Explore Our Work
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Think · Create · Innovate · Inspire
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
