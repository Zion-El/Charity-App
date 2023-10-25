import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import "./hero.css";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <section id='hero'>
      <div className='overlay'></div>
      <div className='hero-content'>

        <h3>Join Us Today</h3>
        <h1>To make the world a better place</h1>
        <p>We are a volunteer-driven organization with a specific focus on providing food and sustainable means of livelihood to the less privilege in the society.</p>

        <div className='hero-btn'>
          <Link className='left' to="/about">About Us</Link>
          <Link  className='right' to="/contact">Donate</Link>
        </div>

      </div>

    </section>
    // <>

    //         <div className='hero-image'>
    //         <Row> 
    //             <Col lg={12} sm={12} md={12}>
    //                <div className='hero-content'>
    //                <h3>Join us today</h3>
    //                 <h1></h1>
    //                 <p> </p>
    //                 <div className='row hero-btn'>
    //                   <div className='col-md-6 col-lg-6 btn-left'>
    //                       <Link to="/about">About Us</Link>
    //                   </div>
    //                   <div className='col-md-6 col-lg-6 btn-right'>
    //                   <Link to="/contact">Donate</Link>
    //                   </div>
    //               </div>
    //                </div>
    //             </Col>
    //         </Row>
    //         </div>
    // </>
  )
}

export default Hero
