import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import WorkExperience from "./components/experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import BlogGrid from "./components/Blog/Blog";

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
          <BlogGrid />
          <Contact />
        </div>
      </section>
    </>
  );
}

export default App;
