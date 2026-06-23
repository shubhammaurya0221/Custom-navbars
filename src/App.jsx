import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PureGlobal from './Costom-Components/Navbars/PureGlobal';
import TCS from './Costom-Components/Navbars/TCS';
import Worley from './Costom-Components/Navbars/Worley';
import TCS2 from './Costom-Components/Navbars/TCS2';

// Create a simple Home component to hold your navigation buttons
const Home = () => {
  return (
    <div className="p-10 flex gap-5 flex-wrap">
      <Link 
          to="/treebay-tech" 
          className="px-5 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition text-center inline-block"
        >
          Treebay Updated Solution Section
        </Link>
        <Link 
          to="/tcs" 
          className="px-5 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition text-center inline-block"
        >
          TCS Navbar
        </Link>
  
        <Link 
          to="/worley" 
          className="px-5 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition text-center inline-block"
        >
          Worley Navbar
        </Link>

        <Link 
          to="/pureglobal" 
          className="px-5 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition text-center inline-block"
        >
          PureGlobal Navbar
        </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Route showing the buttons */}
        <Route path="/" element={<Home />} />
        
        {/* Navbar Routes */}
        <Route path="/treebay-tech" element={<TCS2 />} />
        <Route path="/tcs" element={<TCS />} />
        <Route path="/worley" element={<Worley />} />
        <Route path="/pureglobal" element={<PureGlobal />} />
      </Routes>
    </Router>
  );
}

export default App;