import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Metrics from "./components/Metrics";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="gradient-line" />
      <About />
      <div className="gradient-line" />
      <TechStack />
      <div className="gradient-line" />
      <Projects />
      <div className="gradient-line" />
      <Metrics />
      <div className="gradient-line" />
      <Footer />
    </main>
  );
}
