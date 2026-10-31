import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f5f3ee] px-6 pt-32 md:px-12"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Intro Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500"></span>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
            Creative Digital Agency
          </p>
        </motion.div>

        {/* Hero Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-6xl font-black leading-[0.95] tracking-tighter text-black sm:text-7xl md:text-8xl"
            >
              WE MAKE
              <br />

              BRANDS
              <br />

              <span className="text-orange-500">MATTER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-lg text-base leading-7 text-gray-600 md:text-lg"
            >
              We create meaningful digital experiences that help
              brands connect with people, build identities and
              stand out in a crowded world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500"
              >
                Explore Our Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-black px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[350px] overflow-hidden rounded-[2rem] bg-orange-200 sm:h-[450px] lg:h-[550px]">

              <img
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6"
                alt="Creative visual"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="absolute bottom-6 left-6 rounded-full bg-white px-5 py-3">
                <p className="text-xs font-bold uppercase tracking-widest text-black">
                  Think. Create. Inspire.
                </p>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -right-5 -top-5 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl sm:h-32 sm:w-32">
              <p className="text-center text-xs font-bold uppercase leading-5 tracking-wider">
                Creative
                <br />
                Minds
                <br />
                Club
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Indicator */}
        <div className="mt-16 flex items-center justify-between border-t border-gray-300 py-6">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Scroll to explore
          </p>

          <ArrowDown size={20} className="animate-bounce text-orange-500" />
        </div>

      </div>
    </section>
  );
};

export default Hero;

