import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  // Include country code without + or spaces
  const phoneNumber = "919876543210";

  const message = encodeURIComponent(
    "Hello! I'm interested in your services. Can you provide more information?",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        group
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition-colors
        duration-300
        hover:bg-[#20ba5a]
        sm:bottom-8
        sm:right-8
        sm:h-16
        sm:w-16
      "
    >
      {/* WhatsApp Icon */}
      <FaWhatsapp size={32} />

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute
          right-full
          mr-4
          whitespace-nowrap
          rounded-lg
          bg-black
          px-4
          py-2
          text-xs
          font-semibold
          text-white
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
