import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProfessionalImage from "@/components/ui/professional-image";
import profileImage from "@assets/57429 (3).jpg";
import { useState, useEffect } from "react";
import { technologiesList } from "@/data/portfolio-data";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  Phone,
} from "phosphor-react";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation items
  const navItems = [
    { id: "hero", label: "HOME()" },
    { id: "about", label: "SOURCE" },
    { id: "experience", label: "PIPELINE" },
    { id: "projects", label: "OUTPUT" },
    { id: "contact", label: "BUG ME" },
  ];

  // Professional roles
  const roles = [
    "<Engineer/>",
    "<Programmer/>",
    "<Designer/>",
    "<Thinker/>",
    "<Problem Solver/>",
  ];

  // Social links
  const socialLinks = [
    {
      icon: <GithubLogo weight="fill" className="h-7 w-7" />,
      href: "https://github.com/sairam356",
      ariaLabel: "GitHub",
    },
    {
      icon: <LinkedinLogo weight="fill" className="h-7 w-7" />,
      href: "https://www.linkedin.com/in/sairam356/",
      ariaLabel: "LinkedIn",
    },
    {
      icon: <EnvelopeSimple weight="fill" className="h-7 w-7" />,
      href: "mailto:sairamtechwork@gmail.com",
      ariaLabel: "Email",
    },
    {
      icon: <Phone weight="fill" className="h-7 w-7" />,
      href: "tel:+971564467258",
      ariaLabel: "Phone",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Word cloud tech randomization
  const randomTechnologies = [...technologiesList].sort(
    () => Math.random() - 0.5,
  );

  // Generate random positions, sizes, and opacities for the word cloud
  const wordCloudItems = randomTechnologies.slice(0, 40).map((tech, index) => {
    // Make some technologies larger than others for visual interest
    const isHighlighted = index % 7 === 0;
    const size = isHighlighted
      ? Math.random() * 0.8 + 1.8 // Highlighted: Random size between 1.8 and 2.6
      : Math.random() * 1.2 + 0.8; // Normal: Random size between 0.8 and 2.0

    // Distribute evenly across the area, but with some randomness
    const xPos = 5 + Math.random() * 90; // Random position across full width
    const yPos = 5 + Math.random() * 90; // Random position across full height

    // Vary the opacity based on size
    const opacity = isHighlighted
      ? Math.random() * 0.2 + 0.7 // Highlighted: Higher opacity (0.7-0.9)
      : Math.random() * 0.5 + 0.35; // Normal: Medium opacity (0.35-0.85)

    // Vary rotation more for smaller words
    const rotation = isHighlighted
      ? (Math.random() - 0.5) * 15 // Highlighted: Less rotation (-7.5 to 7.5 degrees)
      : (Math.random() - 0.5) * 30; // Normal: More rotation (-15 to 15 degrees)

    return {
      name: tech,
      style: {
        fontSize: `${size}rem`,
        left: `${xPos}%`,
        top: `${yPos}%`,
        opacity,
        transform: `rotate(${rotation}deg)`,
        zIndex: Math.floor(opacity * 10),
        color: isHighlighted ? "var(--accent)" : undefined,
        fontWeight: isHighlighted ? "bold" : "normal",
        textShadow: isHighlighted ? "0 0 10px rgba(20, 184, 166, 0.3)" : "none",
      },
    };
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden bg-dark"
    >
      {/* Spotlight effect that follows cursor */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20 hidden md:block"
        style={{
          background: `radial-gradient(circle 300px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(20, 184, 166, 0.2), transparent 80%)`,
        }}
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main navigation */}
      <div className="container mx-auto px-4 pt-8">
        <motion.nav
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(`#${item.id}`)}
              className="px-4 py-2 rounded-full bg-dark-light/10 text-accent hover:bg-dark-light/20 transition-colors text-sm font-mono"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(20, 184, 166, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 flex-grow flex items-center">
        <div className="w-full mx-auto">
          {/* Inspirational quote */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-white">
              <span className="text-4xl text-accent">"</span> Where passion
              meets purpose: creating solutions that matter.{" "}
              <span className="text-4xl text-accent">"</span>
            </blockquote>
          </motion.div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left column - Bio */}
            <motion.div
              className="text-center space-y-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-accent"
              >
                <span className="text-2xl text-gray-400">&lt;</span> Sairam
                Gollamudi <span className="text-2xl text-gray-400">/&gt;</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="space-y-3 mt-6">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    className="text-gray-300 text-lg font-mono"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {role}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-4 mt-8"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="bg-dark-light/20 hover:bg-accent/20 p-3 rounded-md text-accent hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* City silhouette */}
              <motion.div
                className="mt-10 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="w-full h-16"
                >
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                    className="fill-accent"
                  ></path>
                  <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                    className="fill-accent"
                  ></path>
                  <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    className="fill-accent"
                  ></path>
                </svg>
              </motion.div>
            </motion.div>

            {/* Right column - Photo + Tech Cloud */}
            <motion.div
              className="relative min-h-[400px] md:min-h-[500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Technology word cloud */}
              <div className="absolute inset-0 overflow-hidden">
                {wordCloudItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-accent/70 font-mono whitespace-nowrap cursor-default"
                    style={item.style}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: item.style.opacity }}
                    transition={{ delay: 0.5 + index * 0.02, duration: 0.8 }}
                    whileHover={{
                      scale: 1.1,
                      color: "var(--accent)",
                      textShadow: "0 0 10px rgba(20, 184, 166, 0.5)",
                    }}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>

              {/* Profile photo */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
              >
                <div className="relative w-64 h-64 md:w-72 md:h-72">
                  <div
                    className="absolute inset-0 rounded-full opacity-20 animate-pulse-slow"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(20,184,166,0.5) 0%, rgba(20,184,166,0) 70%)",
                      boxShadow: "0 0 30px 10px rgba(20,184,166,0.3)",
                    }}
                  ></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-accent/40">
                    <img
                      src={profileImage}
                      alt="Sairam Gollamudi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call-to-action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => handleNavClick("#projects")}
                className="bg-gradient-to-r from-accent to-teal-500 hover:from-accent/90 hover:to-teal-400 text-dark font-semibold rounded-xl px-8 py-6 group"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <Button
                onClick={() => handleNavClick("#contact")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 hover:border-accent/70 px-8 py-6 rounded-xl group"
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
