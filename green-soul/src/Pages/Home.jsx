import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import About from '../components/About/About'
import OurProjects from '../components/OurProjects/OurProjects'
import Contact from '../components/Contact/Contact'
import Goals from '../components/Goals/Goals'
import Funders from '../components/Funders/Funders'

const Home = () => {
  return (
   <>
         <Hero />
         <div className="container">
        <Title title="Our Misson" />
        <About />
        <Title title='Our goals' />
        <Goals />
        <Title title='Our Funders & suppporters' />

        <Funders />
        <Contact />

      </div>

   </>
  )
}

export default Home