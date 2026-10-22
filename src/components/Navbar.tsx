
import { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const links = [
  { name: "Home", id: "Home" },
  { name: "About", id: "About" },
  { name: "Skills", id: "Skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DED2] bg-[#F8F4EF]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-[#30251F]"
        >
          ansharah<span className="text-[#A17D60]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-[#765C48] transition-colors hover:text-[#30251F]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#30251F] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#765C48] md:flex"
        >
          Let's Talk <RiArrowRightUpLine />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#30251F] md:hidden"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col border-t border-[#E8DED2] bg-[#F8F4EF] px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#765C48] transition-colors hover:bg-[#EDE3D7] hover:text-[#30251F]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#30251F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#765C48]"
          >
            Let's Talk <RiArrowRightUpLine />
          </a>
        </div>
      )}
    </header>
  );
}
