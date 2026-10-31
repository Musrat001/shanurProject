import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import { ArrowUpRight, ArrowUp } from "lucide-react";

const Footer = () => {

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Brand Strategy",
    "Digital Marketing",
    "Influencer Marketing",
    "Creative Design",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "#",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "#",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "#",
    },
  ];

  return (
    <footer className="overflow-hidden bg-[#111111] px-6 pt-20 text-white md:px-12">

      <div className="mx-auto max-w-[1440px]">

        {/* Top Footer */}
        <div className="grid gap-14 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Information */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="text-3xl font-black tracking-tighter"
            >
              THE HYPE<span className="text-orange-500">.</span>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-gray-400">
              We are a creative digital agency focused on
              building meaningful brand experiences through
              strategy, innovation and creativity.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-7 text-sm font-bold uppercase tracking-widest">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    {link.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="mb-7 text-sm font-bold uppercase tracking-widest">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li key={service}>

                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    {service}
                  </a>

                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 py-12 md:flex-row md:items-center">

          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Have a project?
            </p>

            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">
              LET'S TALK<span className="text-orange-500">.</span>
            </h2>

          </div>

          <a
            href="#contact"
            className="flex w-fit items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600"
          >
            Start a Conversation
            <ArrowUpRight size={19} />
          </a>

        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-5 py-7 sm:flex-row sm:items-center">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} The Hype. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <a
              href="#"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500"
            >
              <ArrowUp size={18} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

