import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Recognition from "@/components/sections/Recognition";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import { timelineData } from "@/data/portfolio-data";

const Home = () => {
  return (
    <div className="bg-dark text-light font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Recognition />
        <Timeline timelineData={timelineData} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
