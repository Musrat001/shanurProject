import { motion } from "framer-motion";
import {
  ArrowRight,
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
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-500">
            Our Services
          </p>

          <h2 className="text-3xl font-black tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
            Empowering Brands with Smart Strategies
          </h2>

          {/* Orange Divider */}
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-[#ff5733]" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className={`
                  group relative flex min-h-[350px] flex-col
                  items-center justify-center
                  rounded-[24px] border border-gray-200
                  bg-white px-7 py-9 text-center
                  shadow-[0_4px_8px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  hover:border-orange-200
                  hover:shadow-[0_15px_35px_rgba(255,110,50,0.12)]
                  ${index === 1 ? "lg:min-h-[400px]" : ""}
                `}
              >
                {/* Icon Container */}
                <div className="mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 group-hover:border-orange-100 group-hover:bg-orange-50">
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    className="text-orange-500 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Service Title */}
                <h3 className="mb-4 text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="max-w-[340px] text-sm leading-7 text-gray-600 sm:text-base">
                  {service.description}
                </p>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="group/link mt-7 inline-flex items-center gap-2 text-base font-medium text-orange-500 transition-all duration-300 hover:text-[#ff5733]"
                >
                  Learn More
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover/link:translate-x-2"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
