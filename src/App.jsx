import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Plans from './pages/Plans';
import Trainers from './pages/Trainers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="Trainers" element={<Trainers />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
