import Hero from "./sections/Hero";
import About from "./sections/About";
import Speaking from "./sections/Speaking";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Watch from "./sections/Watch";
import Buzz from "./sections/Buzz";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Speaking />
      <Projects />
      <Gallery />
      <Watch />
      <Buzz />
      <Contact />
    </main>
  );
}
