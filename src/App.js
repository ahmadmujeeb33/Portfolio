import './App.css';

import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';
import { Home }  from './Pages/Home/'
import { Projects } from './Pages/Projects';
import { Experience } from './Pages/Experience';
import { About } from './Pages/About'


function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
