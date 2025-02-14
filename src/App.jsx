import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import WorkExperience from "./components/experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <Hero />
          <Skill />
          <WorkExperience />
          <Portfolio />
          <Contact />
        </div>
      </section>
    </>
  );
}

export default App;
