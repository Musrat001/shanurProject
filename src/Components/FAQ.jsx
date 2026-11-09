import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What services does your agency provide?",
    answer:
      "We provide brand strategy, digital marketing, influencer marketing, creative design and other digital solutions to help businesses build a strong online presence.",
  },
  {
    id: 2,
    question: "How do I start working with your agency?",
    answer:
      "You can contact us through our contact form. Share your requirements and our team will get in touch with you to discuss your project.",
  },
  {
    id: 3,
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with businesses of different sizes, from startups and growing businesses to established brands.",
  },
  {
    id: 4,
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on the scope, complexity and requirements. We discuss the estimated timeline before starting the project.",
  },
  {
    id: 5,
    question: "Can I request a customized marketing strategy?",
    answer:
      "Absolutely. We understand that every business has different goals. We develop strategies according to your brand identity, target audience and business objectives.",
  },
  {
    id: 6,
    question: "How can I get a quotation for my project?",
    answer:
      "Simply contact us with your project details. Our team will review your requirements and discuss the suitable approach and pricing.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-[#fffaf5] px-5 py-20 sm:px-8 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            Got Questions?
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#202020] sm:text-5xl md:text-6xl">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="mx-auto mt-5 h-[4px] w-20 rounded-full bg-gradient-to-r from-orange-400 to-[#ff5733]" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Everything you need to know about our services, process and how we
            can help your brand grow.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-[850px] space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-orange-200 bg-white shadow-md shadow-orange-100/50"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <span
                      className={`text-xs font-bold transition-colors duration-300 ${
                        isOpen ? "text-orange-500" : "text-gray-400"
                      }`}
                    >
                      0{faq.id}
                    </span>

                    {/* Question Text */}
                    <h3 className="text-sm font-semibold text-[#252525] sm:text-base">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-5 pb-4 pt-3 sm:pl-[60px] sm:pr-6">
                        <p className="text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 flex max-w-[850px] flex-col items-center justify-between gap-5 rounded-2xl bg-[#202020] px-6 py-6 sm:flex-row sm:px-8"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Still have questions?
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Let's discuss your ideas and find the right solution.
            </p>
          </div>

          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-[#ff5733] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20"
          >
            Contact Us
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
