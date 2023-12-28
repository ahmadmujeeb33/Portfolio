import './App.css';

import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';


import { Home }  from './pages/Home'
import { Projects } from './Components/Projects';




function App() {
  return (
    <>
      <Header />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />

          </Routes>

      </div>
    </>
  );
}

export default App;
