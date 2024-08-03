import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/common/Footer';
import About from './components/sections/About';
import Blog from './components/sections/Blog';

export default function App() {
  return (
    <div id="root" className="overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
