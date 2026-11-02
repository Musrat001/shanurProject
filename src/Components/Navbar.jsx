import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "Services", href: "#services" },
{ name: "About", href: "#about" },
{ name: "Work", href: "#work" },
{ name: "Contact", href: "#contact" },
];

return ( <header className="fixed left-0 top-0 z-50 w-full px-4 pt-5 sm:px-6 md:px-10"> <nav
     className="
       relative mx-auto flex max-w-[1440px] items-center
       justify-between rounded-full
       border border-white/40
       bg-white/80 px-6 py-3
       shadow-[0_8px_25px_rgba(0,0,0,0.12)]
       backdrop-blur-xl
       sm:px-10 md:px-12
     "
   >
{/* Logo */} <a
       href="#home"
       className="flex shrink-0 items-center"
     > <img
         src="/tanveer-digital-hub.jpeg"
         alt="Tanveer Digital Hub"
         className="
           h-16 w-24
           object-cover object-center
         "
       /> </a>

    {/* Desktop Navigation */}
    <div
      className="
        absolute left-1/2 hidden -translate-x-1/2
        items-center gap-8 rounded-full
        border border-gray-200/80
        bg-gray-100/80 px-8 py-3
        md:flex lg:gap-12
      "
    >
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="
            whitespace-nowrap text-sm font-medium
            text-gray-800 transition-colors duration-300
            hover:text-orange-500
          "
        >
          {link.name}
        </a>
      ))}
    </div>

    {/* CTA Button */}
    <a
      href="#contact"
      className="
        hidden rounded-full bg-black
        px-8 py-3 text-sm font-semibold text-white
        shadow-md transition-all duration-300
        hover:scale-105 hover:bg-orange-500
        md:block
      "
    >
      Let's Talk
    </a>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-black md:hidden"
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
    >
      {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
    </button>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div
        className="
          absolute left-0 top-full mt-3 w-full
          rounded-3xl border border-white/50
          bg-white/95 p-6 shadow-xl
          backdrop-blur-xl md:hidden
        "
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="
                text-base font-medium text-gray-800
                transition-colors hover:text-orange-500
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="
              mt-2 w-fit rounded-full bg-black
              px-7 py-3 text-sm font-semibold text-white
              transition-colors hover:bg-orange-500
            "
          >
            Let's Talk
          </a>
        </div>
      </div>
    )}
  </nav>
</header>


);
};

export default Navbar;
