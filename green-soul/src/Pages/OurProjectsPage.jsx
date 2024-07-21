import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Title from '../components/Title/Title'
import OurProjects from '../components/OurProjects/OurProjects'

const OurProjectsPage = () => {
  return (
    <>
    <Navbar />
      <br/>
      <Title title="Our community projects" />
      
      <OurProjects />

    </>
  )
}

export default OurProjectsPage