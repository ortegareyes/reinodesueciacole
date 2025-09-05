import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ProfesoresLogin from './components/ProfesoresLogin';
import ProfesoresPanel from './components/ProfesoresPanel';
import Alumnos from './components/Alumnos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <LayoutHeader />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profesores" element={<ProfesoresLogin />} />
          <Route path="/profesores-panel" element={<ProfesoresPanel />} />
          <Route path="/alumnos" element={<Alumnos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
