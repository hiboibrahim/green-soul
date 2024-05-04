import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import OurProjects from "./components/OurProjects/OurProjects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
         <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="contact" element={<contact />} />
        <Route path="/ourprojects" element={<ourprojects />} />
        <Route path="/events" element={<events />} />

      </Routes>
      <Hero />
      <div className="container">
        <Title title="Our Misson" />
        <About />
        <Title title="Our community projects" />
        <OurProjects />
        <Title title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
