import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
  },
  {
    number: "30+",
    label: "Happy Clients",
  },
  {
    number: "5+",
    label: "Years of Experience",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#f5f3ee] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
            Who We Are
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black leading-[0.95] tracking-tighter text-black sm:text-6xl md:text-7xl xl:text-8xl"
            >
              WE TURN
              <br />
              IDEAS INTO
              <br />
              <span className="text-orange-500">IMPACT.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl text-base leading-8 text-gray-600 md:text-lg"
            >
              We are a creative digital agency driven by ideas, innovation and
              imagination. We help brands discover their identity, communicate
              their vision and create meaningful connections with their
              audiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 max-w-xl text-base leading-8 text-gray-600 md:text-lg"
            >
              Our approach combines strategy, creativity and technology to
              transform ambitious ideas into experiences that make a difference.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500"
            >
              Discover More
              <ArrowUpRight size={19} />
            </motion.a>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative h-[400px] overflow-hidden rounded-[2rem] sm:h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                alt="Creative team collaborating"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-3 flex h-28 w-28 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl sm:-left-8 sm:h-36 sm:w-36">
              <div className="text-center">
                <Sparkles className="mx-auto mb-2" size={24} />

                <p className="text-xs font-bold uppercase leading-5 tracking-wider">
                  Think
                  <br />
                  Beyond
                  <br />
                  Limits
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 grid grid-cols-1 gap-8 border-t border-gray-300 pt-10 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-8 sm:border-b-0 sm:border-r sm:pb-0 last:border-none"
            >
              <h3 className="text-5xl font-black tracking-tighter text-black md:text-6xl">
                {stat.number}
              </h3>

              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
