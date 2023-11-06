import React from 'react'
import {  Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img2 from "../../asset/img2.jpg";
import img6 from "../../asset/img6.png";
import "./mission2.css"
const Mission2 = () => {
  return (
    <>
    <div>
    <div className='f-mission'>
            <div className='f-left'>
              <h6>About Our Foundation</h6>
              <h3> We are on a mission  to<br/>help the most vulnerable </h3>
              <p>Naomi Hope Foundation is a non-governmental organization established in the year 2018 and officially registered with the Corporate Affairs Commission in 2022 to provide humanitarian services to the orphans, widows and less privileged children in the society.</p>
              <p>Since its inception in 2018, NHF has left no efforts in its quest to serve these categories of people and providing sustainable livelihoods.</p>
              <div className='f-btn'>
                    <Link to="/about">About Us</Link>
                </div>
            </div>

           <div className='f-right'>
                <img className='img1' src={img2} alt="imgg"/>
                <img className='img2' src={img6} alt="imgg"/>
            </div>

        </div>   
    </div>
    </>
  )
}

export default Mission2