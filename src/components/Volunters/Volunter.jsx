import React, { Component } from "react";
import Slider from "react-slick";
import "./volunter.css";
import img1 from "../../asset/v1.jpg";
import img2 from "../../asset/F.jpg";
import img3 from "../../asset/VF.jpg";
import img4 from "../../asset/v4.jpg";

    const volunteers = [{
        id:1,
        name: "Mr Ayodeji Oluwafemi",
        img: img4,
        position: "Patron",
        content: "Has been involved and led several teams in medical outreaches, and other humanitarian services. He is a senior Pastor and the Managing Director of Projects Costs Limited, a registered Quantity Surveying and a project management company."
    },
    {
        id:2,
        name: "Mr Oyewole Oyelayo ",
        img: img3,
        position:"Vice President",
        content: "He is the vice president and co- founder of Naomi Hope Foundation. He has a vision make the lives of the less privileged in poor communities in Nigeria worth living. He is a renowned Information Technology Expert and Practitioner. "
    },
    {
        id:3,
        name: "Mrs Oluwaseun Adeyeye ",
        img: img1,
        position: "Head of Administration",
        content: "She is the head of administrative unit of Naomi Hope foundation. She is a humanitarian dedicated to the course of eradicating poverty in the society. She works with Tangerine Africa."
    },
    {
        id:4,
        name: "Mrs Olawumi Oyelayo",
        img: img2,
        position:"Founder",
        content: "She is the founder and president of Naomi Hope Foundation. A visionary and passionate woman with the aim to affect positively the lives of widows, orphan and the needy in the society. She is also the managing Director of Adullam Nigeria Company."
    }
  ];

export default class Volunter extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="vol-box">
        <h2>Meet Our Team </h2>
        <div className="slider-box">
          <Slider {...settings}>
              {
                  volunteers.map((item, index)=>{
                      return(
                        <div className="vol-cardbox">
                          <div className="vol-card" key={item.id}>
                            <div className="vol-header">
                              <img className="vol-img" src={item.img} alt="volt" />
                              <div>
                                <h6>
                                  {item.name}
                                </h6>
                                <p>{item.position}</p>
                              </div>
                            </div>
                              
                              <hr />
                              <div className="vol-body">
                                <p>{item.content}</p>
                              </div>
                          </div>                          
                        </div>

                      )
                  })
              }
          </Slider>          
        </div>

      </div>
    );
  }
}


// import React from 'react';
// import {  Row, Col, Card} from 'react-bootstrap';
// import Slider from "react-slick";




//   return (
//     <div className='volunteer-wrap'>
//         <div className='volunteer-top text-center'>
//             <h2>Meet Our Volunteer</h2>
           
//         </div>
//         <div className='volunteers'>

//         </div>
//     </div>
//   )
// }

// export default Volunter