import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import NavBarVertical from "./components/NavBarVertical";
import ProjectsPage from "./components/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBarVertical /> {/* Move NavBarVertical here */}
                <Home />
                <About />
                <Skills />
                <Projects />
              </div>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
