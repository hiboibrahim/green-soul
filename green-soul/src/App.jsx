import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import OurProjects from './OurProjects/OurProjects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title/>
      <About/>
      <Title subTitle='Our Projects' title='Our community projects'/>
      <OurProjects/>
    
      </div>
    </div>
  )
}

export default App