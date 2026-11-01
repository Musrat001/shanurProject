import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  userType: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/users/create`,
        formData,
      );

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
      className="overflow-hidden bg-[#111111] px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Get In Touch
          </p>

          <h2 className="text-5xl font-black leading-none tracking-tighter sm:text-6xl md:text-8xl">
            LET'S CREATE
            <br />
            <span className="text-orange-500">SOMETHING GREAT.</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold">Have a project in mind?</h3>

            <p className="mt-5 max-w-md leading-8 text-gray-400">
              We'd love to hear about your ideas. Tell us what you're planning,
              and let's create something meaningful together.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Email Us
                  </p>

                  <a
                    href="mailto:hello@example.com"
                    className="mt-1 block break-all font-medium transition-colors hover:text-orange-500"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Call Us
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block font-medium transition-colors hover:text-orange-500"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 font-medium">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-14">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
                {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-full border border-white/20 px-5 py-3 text-sm transition-all duration-300 hover:border-orange-500 hover:bg-orange-500"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-[#1b1b1b] p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-white/10 bg-[#252525] px-4 py-4 text-sm outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-white/10 bg-[#252525] px-4 py-4 text-sm outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-sm font-medium"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    required
                    maxLength={20}
                    className="w-full rounded-xl border border-white/10 bg-[#252525] px-4 py-4 text-sm outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>

                {/* User Type - New Field */}
                <div>
                  <label
                    htmlFor="userType"
                    className="mb-3 block text-sm font-medium"
                  >
                    I am a *
                  </label>

                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#252525] px-4 py-4 text-sm text-white outline-none transition-all focus:border-orange-500"
                  >
                    <option value="" disabled>
                      Select your role
                    </option>

                    <option value="Brand">Brand</option>

                    <option value="Influencer">Influencer</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-sm font-medium"
                  >
                    Subject *
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    maxLength={150}
                    className="w-full rounded-xl border border-white/10 bg-[#252525] px-4 py-4 text-sm outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  maxLength={5000}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#252525] px-4 py-4 text-sm outline-none transition-all placeholder:text-gray-500 focus:border-orange-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                {!isSubmitting && <ArrowUpRight size={19} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
