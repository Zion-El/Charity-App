import React from 'react'
import Aboutc from '../components/Aboutc/Aboutc'
import AfterNav from '../components/AfterNav/AfterNav'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Volunter from '../components/Volunters/Volunter'

const About = () => {
  return (
    <div>
      <AfterNav title="About Us" />
      <Aboutc/>
      <Volunter/>
    </div>
  )
}

export default About
