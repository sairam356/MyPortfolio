import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import MobileMenu from "./MobileMenu";
import resumePdf from "@assets/Sairam Resume.pdf";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Recognition", href: "#recognition" },
    { name: "Career Journey", href: "#timeline" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setLocation("/", { replace: true });
  };

  return (
    <header
      className={`fixed w-full z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "bg-dark/80 backdrop-blur-md border-dark-light/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-accent">GVS</span>
          <span className="hidden md:block text-xl font-semibold">
            Venkata Sairam Gollamudi
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-light/70 hover:text-accent transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Toggle - handled by MobileMenu component */}
        <div className="md:hidden">
          <MobileMenu items={navItems} onNavClick={handleNavClick} />
        </div>

        {/* Resume Button (Desktop) */}
        <a
          href={resumePdf}
          download="Sairam_Gollamudi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="default"
            className="hidden md:flex bg-primary hover:bg-secondary"
          >
            Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
