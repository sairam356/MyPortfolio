import SectionHeading from "@/components/ui/section-heading";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import SkillProgress from "@/components/ui/skill-progress";
import TechnologyTag from "@/components/ui/technology-tag";
import { technicalSkills, technologies, technologiesList, softSkills } from "@/data/portfolio-data";

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold mb-3 text-accent">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <TechnologyTag key={index} name={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-light">
      <div className="container mx-auto px-6">
        <SectionHeading number="03" title="My Skills" />
        
        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
              
              {/* Skill Progress Bars */}
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillProgress 
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mt-12 mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-accent">▹</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg">📱</span>
                  <div>
                    <p>+971 564467258</p>
                    <p>+91 9681717002</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg">📧</span>
                  <p>sairam356@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg">📍</span>
                  <p>Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCategory title="Programming Languages" skills={technologies.programmingLanguages} />
              <SkillCategory title="Frameworks" skills={technologies.frameworks} />
              <SkillCategory title="Design & Architecture" skills={technologies.designAndArchitecture} />
              <SkillCategory title="Cloud Platforms" skills={technologies.cloudPlatforms} />
              <SkillCategory title="Databases" skills={technologies.databases} />
              <SkillCategory title="Documentation & API" skills={technologies.documentation} />
              <SkillCategory title="DevOps & CI/CD" skills={technologies.devOps} />
              <SkillCategory title="Testing" skills={technologies.testing} />
              <SkillCategory title="Security" skills={technologies.security} />
              <SkillCategory title="Project Management" skills={technologies.projectManagement} />
              <SkillCategory title="Messaging & Streaming" skills={technologies.messaging} />
              <SkillCategory title="Version Control" skills={technologies.versionControl} />
              <SkillCategory title="AI & ML" skills={technologies.aiMl} />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Skills;
