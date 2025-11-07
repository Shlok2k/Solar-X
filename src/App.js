import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Process from './sections/Process';
import Solutions from './sections/Solutions';
import UseCases from './sections/UseCases';
import Portfolio from './sections/Portfolio';
import Media from './sections/Media';
import Team from './sections/Team';
import Contact from './sections/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
