import './App.css';

import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';


import { Home }  from './Pages/Home/'
import { Projects } from './Pages/Projects';
import { Experiance } from './Pages/Experiance';




function App() {
  return (
    <>
      <Header />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiance" element={<Experiance />} />
          </Routes>

      </div>
    </>
  );
}

export default App;
