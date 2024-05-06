import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import About from '../components/About/About'
import OurProjects from '../components/OurProjects/OurProjects'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
   <>
         <Hero />
         <div className="container">
        <Title title="Our Misson" />
        <About />
        <Contact />

      </div>

   </>
  )
}

export default Home