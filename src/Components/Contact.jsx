import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { toast } from "react-toastify";
import axiosInstance from "../Api/AxiosInstance";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message, userType } = formData;

    // if (
    //   !name.trim() ||
    //   !email.trim() ||
    //   !phone.trim() ||
    //   !subject.trim() ||
    //   !message.trim() ||
    //   !userType.trim()
    // ) {
    //   toast.error("All fields are required");
    //   return;
    // }

    try {
      setIsSubmitting(true);

      const response = await axiosInstance.post("/api/v1/users/brand/create", {
        ...formData,
        userType: "Brand",
      });

      if (response.data.success) {
        toast.success("Your message has been submitted successfully!");
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fffaf5] px-5 py-20 sm:px-8 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="text-4xl font-black tracking-tight text-[#202020] sm:text-5xl md:text-6xl">
            Let's Work Together
          </h2>

          {/* Gradient Divider */}
          <div className="mx-auto mt-5 h-[5px] w-[120px] rounded-full bg-gradient-to-r from-orange-400 to-[#ff5733]" />

          <p className="mt-8 text-base text-gray-600 sm:text-lg md:text-[23px]">
            Send us a message and we'll get back to you shortly.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[28px] border border-[#eee7df] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)] sm:p-10 md:p-14"
        >
          <form onSubmit={handleSubmit}>
            {/* Input Grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-lg font-semibold text-[#252525]"
                >
                  Name <span className="text-[#ff5733">*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-base text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-lg font-semibold text-[#252525]"
                >
                  Email <span className="text-[#ff5733">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-base text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-lg font-semibold text-[#252525]"
                >
                  Phone <span className="text-[#ff5733">*</span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                  autoComplete="tel"
                  required
                  maxLength={20}
                  className="w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-base text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* UserType */}
              <div>
                <label
                  htmlFor="userType"
                  className="mb-3 block text-lg font-semibold text-[#252525]"
                >
                  I am a <span className="text-[#ff5733">*</span>
                </label>

                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-base text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                >
                  <option value="" disabled>
                    Select your role
                  </option>

                  <option value="Brand">Brand</option>
                  <option value="Influencer">Influencer</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-3 block text-lg font-semibold text-[#252525]"
                >
                  Subject <span className="text-[#ff5733">*</span>
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=""
                  required
                  maxLength={150}
                  className="w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-base text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label
                htmlFor="message"
                className="mb-3 block text-lg font-semibold text-[#252525]"
              >
                Message <span className="text-[#ff5733">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=""
                rows={6}
                required
                maxLength={5000}
                className="w-full resize-none rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-base text-gray-900 outline-none transition-all duration-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-400 to-[#ff5733] px-9 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                {!isSubmitting && (
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
