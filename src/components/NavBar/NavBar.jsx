import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";
import logo from "../../asset/logo.png";
import "./NavBar.css"

const NavBar = () => {
    const [nav, setNav] = useState("#navbar");
    const [icon, setIcon] = useState("fas fa-bars");
    const  router = useLocation()

    const navToggle = () => {
        if (nav === "#navbar") {
          setNav("#navbar active");
        } else setNav("#navbar");
    
        // Icon Toggler
        if (icon === "fas fa-bars") {
          setIcon("fas fa-times");
        } else setIcon("fas fa-bars");
      };



  return (
    <>
    <nav   >
        <Link to="/"><img id='logo-image' src={logo} alt='logoimage' /></Link>

        <ul id='navbar' className={nav}>
                <li><Link to="/" className={`${router.pathname === '/'? 'active' : ''}`}>Home</Link></li>
                <li><Link to="/about" className={`${router.pathname.includes('/about')? 'active' : ''}`}>About</Link></li>
                <li><Link to="/social-events" className={`${router.pathname.includes('/social-events')? 'active' : ''}`}>Social Events</Link></li>
                <li><Link to="/latest-causes" className={`${router.pathname.includes('/latest-causes')? 'active' : ''}`}>Latest Causes</Link></li>
                <li><Link to="/contact" className={`${router.pathname.includes('/contact')? 'active' : ''}`}>Contact Us</Link></li>                
        </ul>


        <div>
          {/* <Link to="/contact" id='donate-btn2'>Donate</Link> */}
          <Link to="/contact" id='donate-btn'>Donate</Link>
        </div>

        <div id='mobile'>
            <i id='bar' onClick={navToggle} className={icon}></i>
        </div>

    </nav>
    </>
  )
}

export default NavBar