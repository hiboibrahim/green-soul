import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Title from './components/Title/Title'
import OurProjects from './components/OurProjects/OurProjects'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='About Us' title='Our Misson'/>
      <About/>
      <Title subTitle='Our Projects' title='Our community projects'/>
      <OurProjects/>
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact/>
    
      </div>
    </div>
  )
}

export default App