import BentoHero from "./sections/BentoHero";
import About from "./sections/About";
import Speaking from "./sections/Speaking";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <BentoHero />
      <About />
      <Speaking />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
}
