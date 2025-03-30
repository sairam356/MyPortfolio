import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/sairam356",
      ariaLabel: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/sairam356",
      ariaLabel: "LinkedIn",
    },
  ];

  return (
    <footer className="py-8 border-t border-dark-light/30">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <a
            href="#"
            className="text-2xl font-bold text-accent hover:text-secondary transition-colors"
          >
            GVS
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                aria-label={link.ariaLabel}
                className="text-light/70 hover:text-accent transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <p className="text-light/50 text-sm">
          Designed & Built by Venkata Sairam Gollamudi ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
