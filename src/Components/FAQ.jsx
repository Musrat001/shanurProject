
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
      className="bg-[#f5f3ee] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Got Questions?
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-tighter text-black sm:text-6xl md:text-8xl">
              FREQUENTLY
              <br />
              ASKED
              <br />
              <span className="text-orange-500">QUESTIONS.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-gray-600 md:text-lg">
            Everything you need to know about our services,
            process and how we can help your brand grow.
            Can't find your answer? Get in touch with us.
          </p>

        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left transition-colors hover:bg-gray-50 sm:p-7"
                >

                  <div className="flex items-start gap-4">

                    <span className="pt-1 text-sm font-bold text-orange-500">
                      0{faq.id}
                    </span>

                    <h3 className="text-base font-bold text-black sm:text-lg md:text-xl">
                      {faq.question}
                    </h3>

                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-orange-500">

                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}

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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >

                      <div className="border-t border-gray-100 px-5 pb-6 pt-5 sm:px-7 sm:pl-16">

                        <p className="text-sm leading-8 text-gray-600 md:text-base">
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
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#111111] p-8 text-center sm:p-12 md:flex-row md:text-left">

          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Still have questions?
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Let's discuss your ideas and find the right solution.
            </p>
          </div>

          <a
            href="#contact"
            className="flex shrink-0 items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600"
          >
            Contact Us
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default FAQ;

