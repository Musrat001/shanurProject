import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
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
    <section id="work" className="bg-[#f5f3ee] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Our Creative Universe
            </p>

            <h2 className="text-5xl font-black leading-none tracking-tighter text-black sm:text-6xl md:text-8xl">
              SELECTED
              <br />
              <span className="text-orange-500">WORK.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-gray-600 md:text-lg">
            A collection of ideas, collaborations and creative experiences that
            bring brands to life.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/30">
                  <div className="flex h-16 w-16 translate-y-5 items-center justify-center rounded-full bg-orange-500 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">{project.client}</p>
                </div>

                <button
                  type="button"
                  aria-label={`View ${project.title}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-20 flex justify-center">
          <a
            href="#contact"
            className="flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500"
          >
            Start a Project With Us
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
