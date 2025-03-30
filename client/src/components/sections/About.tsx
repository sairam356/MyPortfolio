import SectionHeading from "@/components/ui/section-heading";
import ProfessionalImage from "@/components/ui/professional-image";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import profileImage from "@assets/57429 (3).jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="container mx-auto px-6">
        <SectionHeading number="01" title="About Me" />
        
        <AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2 space-y-4">
              <p className="text-light/70">
                Hello! I'm Sairam, a Lead Full Stack Developer with more than 8 years of experience in designing, optimizing, and deploying scalable enterprise applications. I specialize in Java, Spring Boot, Node.js, Python, React.js, and cloud platforms like AWS and Oracle Cloud.
              </p>
              <p className="text-light/70">
                Throughout my career, I've demonstrated expertise in microservices architecture, MongoDB optimization, and building high-impact systems. I've had the privilege of working on significant projects such as delivering an E-commerce Credit Card Journey, and developing a bulk payment processing system capable of handling 2 million transactions efficiently.
              </p>
              <p className="text-light/70">
                I'm particularly passionate about innovation and have delivered POCs on automatic code generation and AI-powered chatbots leveraging OpenAI LLM (Azure). My approach combines technical leadership with practical problem-solving to implement proactive, scalable solutions to complex challenges.
              </p>
              <p className="text-light/70">
                Based in Dubai, I'm currently working as a Lead Technology Consultant at Synechron Technologies for Emirates National Bank of Dubai (ENBD), where I drive high-performance delivery of banking technology solutions.
              </p>
            </div>
            <div className="relative mx-auto w-64 h-64 md:w-full md:h-80 group">
              <div className="absolute inset-0 border-2 border-accent rounded-md translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              <ProfessionalImage
                src={profileImage}
                alt="Gollamudi Venkata Sairam"
                className="absolute inset-0 w-full h-full object-cover rounded-md z-10 group-hover:filter group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;
