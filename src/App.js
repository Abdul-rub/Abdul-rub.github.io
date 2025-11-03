import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import Statistics from "./components/Statistics";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience/>
      <Projects />
      <Skills/>
      <Statistics/>
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
