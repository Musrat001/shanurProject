import { motion } from "framer-motion";

const clients = [
  { id: 1, name: "NIKE", style: "font-black italic tracking-tighter" },
  { id: 2, name: "ADIDAS", style: "font-black tracking-tighter" },
  { id: 3, name: "PUMA", style: "font-black italic tracking-tight" },
  { id: 4, name: "NIVEA", style: "font-black tracking-wider" },
  { id: 5, name: "SAMSUNG", style: "font-bold tracking-widest" },
  { id: 6, name: "ORAL-B", style: "font-black tracking-tight" },
  { id: 7, name: "TUBORG", style: "font-black italic" },
  { id: 8, name: "BOROSIL", style: "font-bold tracking-wide" },
  { id: 9, name: "PHILIPS", style: "font-black tracking-tight" },
  { id: 10, name: "JBL", style: "font-black tracking-tighter" },
  { id: 11, name: "GODREJ", style: "font-black italic" },
  { id: 12, name: "ARIEL", style: "font-black tracking-wide" },
];

const Clients = () => {
  // Divide clients into three rows
  const rows = [clients.slice(0, 4), clients.slice(4, 8), clients.slice(8, 12)];

  const animationSettings = [
    { direction: -1, duration: 28 },
    { direction: 1, duration: 32 },
    { direction: -1, duration: 36 },
  ];

  return (
    <section id="clients" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
        </motion.div>

        {/* Animated Logo Rows */}
        <div className="space-y-16 md:space-y-20">
          {rows.map((row, rowIndex) => {
            const settings = animationSettings[rowIndex];

            // Duplicate logos for seamless animation
            const duplicatedRow = [...row, ...row, ...row, ...row];

            return (
              <div
                key={rowIndex}
                className="relative flex w-full overflow-hidden"
              >
                {/* Left Fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-28" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-28" />

                <motion.div
                  className="flex w-max shrink-0 items-center"
                  animate={{
                    x:
                      settings.direction === -1
                        ? ["0%", "-50%"]
                        : ["-50%", "0%"],
                  }}
                  transition={{
                    duration: settings.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {duplicatedRow.map((client, index) => (
                    <div
                      key={`${client.id}-${index}`}
                      className="flex h-24 w-[190px] shrink-0 items-center justify-center px-5 sm:w-[240px] md:h-28 md:w-[270px]"
                    >
                      <span
                        className={`
                          select-none whitespace-nowrap
                          text-2xl text-[#171717]
                          transition-transform duration-300
                          hover:scale-110
                          sm:text-3xl md:text-4xl
                          ${client.style}
                        `}
                      >
                        {client.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
