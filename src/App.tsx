import "./App.css";
import SkillList from "./components/skill-icons/SkillList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Projects from "./pages/Projects";





function App() {
  return (
    <div className="dark">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}


export default App;

