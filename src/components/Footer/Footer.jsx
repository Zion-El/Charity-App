import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../asset/logo.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div className='footer-c'>
                <div className='footer-1'>
                   <div className='footer-logo'>
                   <img src={logo} alt="footerimage"/>
                    </div><br/>
                    <p>Caring makes a difference</p>
                </div>
                <div className='footer-aux'>
                    <div className='footer-3 '>
                        <h3 className='ft-box-title'>Important Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/social-events">Social Events</Link></li>
                            <li><Link to="/latest-causes">Latest Cause</Link></li>
                            <li><Link to="/contact">Donate</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='footer-2'>
                        <h3 className='ft-box-title'>Contact Info</h3>
                    <p><b>Address:</b> <br /> No 4 Unity close, Segun Kujore Estate, Off CMD Road, Magodo</p>
                    <p><b>Email:</b> <br /> naomihopefoundation22@gmail.com</p>
                    <p><b>Contact Us:</b> +2348038231531</p>
                    </div>

                    <div className='footer-4'>
                        <h6 className='ft-box-title'>Follow us on social media</h6>
                        <div className=''>
                        <span><i className='fa fa-facebook'></i></span>
                        <span><i className='fa fa-linkedin'></i></span>
                        <span><i className='fa fa-instagram'></i></span>
                        <span><i className='fa fa-twitter'></i></span>
                        </div>
                    </div>                    
                </div>


      </div>
    </div>
  )
}

export default Footer
