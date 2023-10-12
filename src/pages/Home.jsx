import React from 'react'
import Bvolunteer from '../components/Bvolunteer/Bvolunteer'
import Donate from '../components/Donate/Donate'
import Hero from '../components/Hero/Hero'
import Mission from '../components/Mission/Mission'
import Mission2 from '../components/Mission2/Mission2'
import Payment from '../components/Payment/Payment'
import SocialEvent from '../components/SocialEvent/SocialEvent'
import Volunter from '../components/Volunters/Volunter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Mission/>
        <Mission2/>
        <Donate/>
        <SocialEvent/>
        <Volunter/>
        <Bvolunteer/>
        <Payment/>
    </div>
  )
}

export default Home