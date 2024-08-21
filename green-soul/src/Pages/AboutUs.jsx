import React from 'react'
import AboutPage from '../components/AboutPage/AboutPage'
import Team from '../components/Team/Team'
import Funders from '../components/Funders/Funders'
import Title from '../components/Title/Title'

const AboutUs = () => {
  return (
    <>
    <AboutPage />
    <Team/>
    <Title title='Our Funders & suppporters' />
    <Funders />

    </>
  )
}

export default AboutUs