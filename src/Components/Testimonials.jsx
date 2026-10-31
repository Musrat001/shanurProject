import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    designation: "Marketing Manager",
    company: "Brand One",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Working with this team was an amazing experience. Their creative approach and strategic thinking helped us improve our brand presence.",
  },
  {
    id: 2,
    name: "Priya Verma",
    designation: "Brand Manager",
    company: "Brand Two",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "The team understood our vision perfectly and transformed our ideas into meaningful campaigns. Their dedication was impressive.",
  },
  {
    id: 3,
    name: "Aman Gupta",
    designation: "Business Owner",
    company: "Brand Three",
    image: "https://i.pravatar.cc/150?img=13",
    review:
      "A professional team with excellent creativity and execution. They helped us connect with our target audience more effectively.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    designation: "Creative Director",
    company: "Brand Four",
    image: "https://i.pravatar.cc/150?img=44",
    review:
      "From planning to execution, everything was handled professionally. We look forward to collaborating with them again.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#f5f3ee] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Client Experiences
            </p>

            <h2 className="text-5xl font-black leading-none tracking-tighter text-black sm:text-6xl md:text-8xl">
              WHAT PEOPLE
              <br />
              <span className="text-orange-500">SAY.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-gray-600 md:text-lg">
            Great relationships create great results. Here's what our clients
            have to say about working with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
          className="!pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="flex h-full min-h-[350px] flex-col justify-between rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
                {/* Stars */}
                <div>
                  <div className="mb-8 flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="#f97316"
                        stroke="#f97316"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-base leading-8 text-gray-600 md:text-lg">
                    "{testimonial.review}"
                  </p>
                </div>

                {/* Client Details */}
                <div className="mt-10 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-black">{testimonial.name}</h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {testimonial.designation} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="testimonial-pagination flex items-center gap-2" />

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="testimonial-prev flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-black transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="testimonial-next flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-black transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
