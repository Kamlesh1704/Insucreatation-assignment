import {React} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/features' element={<Features />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
