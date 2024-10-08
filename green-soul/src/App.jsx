import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import OurProjectsPage from './Pages/OurProjectsPage';
import Home from './Pages/Home';


const App = () => {
  return (
    <>
    <Navbar />
    <div >
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ourprojects" element={<OurProjectsPage />} />

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
