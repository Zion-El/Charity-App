import React from 'react'
import Aboutc from '../components/Aboutc/Aboutc'
import AfterNav from '../components/AfterNav/AfterNav'
import Bvolunteer from '../components/Bvolunteer/Bvolunteer'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

const About = () => {
  return (
    <div>
      <AfterNav title="About Us" />
      <Aboutc/>
      <Bvolunteer/>
    </div>
  )
}

export default About
