import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { experienceData } from "@/data/portfolio-data";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>(experienceData[0].company);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-dark to-dark-light/10">
      <div className="container mx-auto px-6">
        <SectionHeading number="02" title="Where I've Worked" />
        
        <div className="flex items-center justify-center mb-10">
          <div className="bg-accent/10 rounded-lg px-6 py-3 text-accent flex items-center shadow-accent/5 shadow-lg">
            <Briefcase className="mr-2 h-5 w-5" />
            <span>Detailed responsibilities and achievements at each company</span>
          </div>
        </div>
        
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto bg-dark-light/5 border border-dark-light/10 rounded-xl p-6 shadow-lg">
            {/* Experience Tabs */}
            <div className="md:flex md:space-x-6">
              <div className="md:w-48 flex md:flex-col overflow-x-auto md:overflow-visible mb-4 md:mb-0 scrollbar-hide">
                {experienceData.map((experience) => (
                  <button
                    key={experience.company}
                    className={cn(
                      "px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 border-accent/30 hover:bg-dark-light/20 hover:text-accent transition-colors whitespace-nowrap md:whitespace-normal focus:outline-none rounded-r-md",
                      {
                        "text-accent border-accent bg-dark-light/10": activeTab === experience.company,
                      }
                    )}
                    onClick={() => setActiveTab(experience.company)}
                  >
                    {experience.company}
                  </button>
                ))}
              </div>
              
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {experienceData
                    .filter((exp) => exp.company === activeTab)
                    .map((experience) => (
                      <motion.div
                        key={experience.company}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="p-2"
                      >
                        <h3 className="text-xl font-bold">
                          {experience.title}{" "}
                          <span className="text-accent">@ {experience.company}</span>
                        </h3>
                        <p className="text-light/70 mb-5 italic">{experience.date}</p>
                        <ul className="space-y-4">
                          {experience.responsibilities.map((item, i) => (
                            <li key={i} className="flex group">
                              <span className="text-accent mr-2 transform group-hover:translate-x-0.5 transition-transform">▹</span>
                              <span className="text-light/80 group-hover:text-light transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Experience;
