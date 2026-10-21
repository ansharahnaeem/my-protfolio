import { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiArrowRightUpLine } from "react-icons/ri";

const links = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#Projects" },
  { label: "Contact", href: "#Contact" },
];

 function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080814]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#Home" className="text-xl font-black tracking-tight text-white">
          AN<span className="text-fuchsia-400">.</span>
          <span className="ml-2 text-xs font-medium tracking-[.3em] text-white/50">PORTFOLIO</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-fuchsia-400">
              {link.label}
            </a>
          ))}
        </div>
        <a href="#Contact" className="hidden items-center gap-2 rounded-full border border-fuchsia-400/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-500 md:inline-flex">
          Let's Talk <RiArrowRightUpLine />
        </a>
        <button type="button" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)} className="text-2xl text-white md:hidden">
          {menu ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </nav>
      {menu && (
        <div className="flex flex-col gap-1 border-t border-white/10 bg-[#101023] px-6 py-4 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenu(false)} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-fuchsia-300">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
export default Navbar;