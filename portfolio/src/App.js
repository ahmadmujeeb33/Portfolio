import './App.css';

import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Header';


import Home  from './pages/Home'




function App() {
  return (
    <>
      <Header />
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

      </div>
    </>
  );
}

export default App;
