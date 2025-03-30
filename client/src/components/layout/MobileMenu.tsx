import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type MobileMenuProps = {
  items: {
    name: string;
    href: string;
  }[];
  onNavClick: (href: string) => void;
};

const MobileMenu = ({ items, onNavClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    onNavClick(href);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={toggleMenu} 
        className="text-light focus:outline-none" 
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="absolute top-full left-0 right-0 bg-dark-light border-t border-dark-light/70 px-4 py-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4 py-2">
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-light/70 hover:text-accent transition-colors py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="default" className="bg-primary hover:bg-secondary">
                Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
