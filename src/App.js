import {React} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import './App.css';
import Features from './screens/Features';
import Contact from './screens/Contact';

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
