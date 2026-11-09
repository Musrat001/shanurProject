import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import InstagramReels from "./InstagramReels";

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding & Strategy",
    client: "Project One",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },
  {
    id: 2,
    title: "Creative Campaign",
    category: "Digital Marketing",
    client: "Project Two",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
  },
  {
    id: 3,
    title: "Visual Storytelling",
    category: "Creative Design",
    client: "Project Three",
    image: "https://images.unsplash.com/photo-1541701494587-cb585028ab",
  },
  {
    id: 4,
    title: "Digital Experience",
    category: "Digital Branding",
    client: "Project Four",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
];

const Portfolio = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:px-12 md:py-28"
    >
      {" "}
      <div className="relative mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-5xl font-black tracking-tight text-[#111827] sm:text-6xl md:text-7xl lg:text-[76px]">
            Our Work
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg md:text-[23px] md:leading-9">
            Collaborations with leading brands — designed for authenticity,
            creativity, and measurable impact.
          </p>

          {/* Orange Divider */}
          <div className="mx-auto mt-8 h-[5px] w-20 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400" />
        </motion.div>

        <InstagramReels/>
      </div>
    </section>
  );
};

export default Portfolio;
