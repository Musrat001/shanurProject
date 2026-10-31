import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Lightbulb,
  TrendingUp,
  Users,
  Palette,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description:
      "We build powerful brand identities and strategies that help businesses stand out and connect with their audience.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Digital Marketing",
    description:
      "We create result-driven digital campaigns that increase visibility, engagement and business growth.",
    icon: TrendingUp,
  },
  {
    id: "03",
    title: "Influencer Marketing",
    description:
      "We connect brands with the right creators to build trust and meaningful relationships with customers.",
    icon: Users,
  },
  {
    id: "04",
    title: "Creative Design",
    description:
      "From visual identities to digital experiences, we turn creative ideas into memorable designs.",
    icon: Palette,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#111111] px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              What We Do
            </p>

            <h2 className="text-5xl font-black leading-none tracking-tighter sm:text-6xl md:text-8xl">
              OUR
              <br />
              <span className="text-orange-500">SERVICES.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-gray-400">
            We combine creativity, strategy and technology to create experiences
            that help brands grow and make a lasting impact.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#1b1b1b] p-8 transition-colors duration-300 hover:border-orange-500/50 hover:bg-[#222222] md:p-10"
              >
                {/* Card Top */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    / {service.id}
                  </span>

                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    className="text-orange-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="mt-12">
                  <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {service.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-gray-400 md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Explore Button */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 transition-colors group-hover:text-orange-500">
                    Explore Service
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-500">
            GOOD IDEAS. GREAT EXECUTION. REAL IMPACT.
          </p>

          <a
            href="#contact"
            className="flex w-fit items-center gap-2 text-sm font-semibold text-orange-500 transition-all hover:gap-4"
          >
            Have a project in mind?
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
