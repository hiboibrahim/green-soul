import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutPage from '../components/AboutPage/AboutPage'
import Team from '../components/Team/Team'
import Funders from '../components/Funders/Funders'
import Title from '../components/Title/Title'

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <AboutPage />
    <Title title='Our Funders & suppporters' />
    <Funders />
    <Team/>

    </>
  )
}

export default AboutUs