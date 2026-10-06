import { useState } from "react";
import Button from "./Button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#E7E5E4]/80 bg-[#FAFAF8]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-5 md:px-8">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-[#171717]"
        >
          Anusree<span className="text-[#6D5DFB]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#6B6B6B] transition-colors duration-200 hover:text-[#171717]"
            >
              {item.name}
            </a>
          ))}

          <Button href="#contact">
            Let's Work Together
            <span>→</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E7E5E4] bg-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <span className="text-xl">×</span>
          ) : (
            <span className="text-lg">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#E7E5E4] bg-[#FAFAF8] px-5 pb-6 pt-5 lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#6B6B6B] transition hover:bg-white hover:text-[#171717]"
              >
                {item.name}
              </a>
            ))}

            <Button
              href="#contact"
              className="mt-3 w-full"
            >
              Let's Work Together
              <span>→</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;