import SectionHeading from "@/components/ui/section-heading";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { recognitions } from "@/data/portfolio-data";
import { FaAward, FaMedal, FaTrophy } from "react-icons/fa";

const Recognition = () => {
  // Rotate through different award icons
  const getIcon = (index: number) => {
    const icons = [FaAward, FaMedal, FaTrophy];
    const Icon = icons[index % icons.length];
    return <Icon className="text-accent text-3xl" />;
  };

  return (
    <section id="recognition" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading number="04" title="Recognition & Awards" />
        
        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div 
                key={index}
                className="bg-dark-light rounded-lg p-6 shadow-lg hover:shadow-accent/10 transition-all duration-300 border border-dark-light/50 hover:border-accent/30"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    {getIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{recognition.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                      <span className="text-accent">{recognition.issuer}</span>
                      <span className="text-light/40">•</span>
                      <span className="text-light/60 text-sm">{recognition.date}</span>
                    </div>
                    <p className="text-light/70">{recognition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Recognition;