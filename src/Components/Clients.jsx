import { motion } from "framer-motion";

const clients = [
  {
    id: 1,
    name: "NIKE",
  },
  {
    id: 2,
    name: "ADIDAS",
  },
  {
    id: 3,
    name: "PUMA",
  },
  {
    id: 4,
    name: "NIVEA",
  },
  {
    id: 5,
    name: "SAMSUNG",
  },
  {
    id: 6,
    name: "ORAL-B",
  },
  {
    id: 7,
    name: "TUBORG",
  },
  {
    id: 8,
    name: "BOROSIL",
  },
];

const Clients = () => {
  // Duplicate logos for seamless scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden bg-[#111111] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500"
          >
            Our Collaborations
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-7xl"
          >
            TRUSTED BY
            <span className="text-orange-500"> BRANDS.</span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
            We collaborate with ambitious brands to create meaningful
            experiences and build lasting connections.
          </p>
        </div>
      </div>

      {/* Logo Slider */}
      <div className="relative w-full">
        {/* Left Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#111111] to-transparent md:w-40" />

        {/* Right Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#111111] to-transparent md:w-40" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex h-28 w-40 shrink-0 items-center justify-center px-6 sm:w-52 md:h-36 md:w-64"
            >
              <span className="cursor-default text-2xl font-black tracking-tighter text-gray-500 transition-all duration-300 hover:scale-110 hover:text-white sm:text-3xl md:text-4xl">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mx-auto mt-16 max-w-[1440px] border-t border-white/10 px-6 pt-8 text-center md:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          Building Partnerships. Creating Impact.
        </p>
      </div>
    </section>
  );
};

export default Clients;
