import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Techs from "./pages/Techs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Techs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
