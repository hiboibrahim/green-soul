import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import OurProjectsPage from './Pages/OurProjectsPage';
import Home from './Pages/Home';
import About from './components/About/About.jsx'
import OurProjects from './components/OurProjects/OurProjects.jsx'
import Contact from './components/Contact/Contact.jsx'


const App = () => {
  return (
    <>
    <Navbar />
    <div >
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourprojects" element={<OurProjects />} />

      </Routes>

      {/* <Hero /> */}
      <div className="container">
        {/* <Title title="Our Misson" />
        <About />
        <Title title="Our community projects" />
        <OurProjects />
        <Title title="Get in Touch" /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
    </>
  );
};

export default App;
