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
        content: "As a senior Pastor, Mission and evangelism coordinator, he has been involved and led team of others in evangelism, medical outreaches, church pioneering works and other humanitarian services. He is always ready to support and render help to the hopeless. He is presently the  Managing Director of Projects Costs Limited, registered Quantity Surveying and a project management company."
    },
    {
        id:2,
        name: "Mr Oyewole Oyelayo ",
        img: img3,
        position:"Vice President",
        content: "He is the vice president and co- founder of Naomi Hope Foundation. He has love for humanity and passion to help the less privileged.His vision is to minister to the vulnerable communities and lend a helping hand to fight poverty. He has many years of experience in the Insurance industry. He is currently working with a reputable Information Technology Company in Lagos Nigeria"
    },
    {
        id:3,
        name: "Mrs Oluwaseun Adeyeye ",
        img: img1,
        position: "Head of Administration",
        content: "She is the head of administrative unit of Naomi Hope foundation. she has the love and passion for humanitarian services, dedicated and committed person in the course of eradicating poverty in the society. She has many years of experience in the insurance industry  and currently working with Tangerine insurance Company in Lagos Nigeria."
    },
    {
        id:4,
        name: "Mrs Olawumi Oyelayo",
        img: img2,
        position:"Founder",
        content: "A visionary and passionate woman with the aim to affect positively the lives of widows, orphan and the needy in the society. A kindhearted person who geared towards helping others and the challenged in society. Over the years, she has been supporting the orphanage homes and widows to live a better and fulfilled life. She is presently the managing Director of Adullam Nigeria Company. She is a minister of God."
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
        <h2>Meet Our Volunteer </h2>
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