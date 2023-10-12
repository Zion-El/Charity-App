import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./socialevent.css";
import img3 from "../../asset/img3.jpg";
import img4 from "../../asset/food.jpg";
import { Link } from "react-router-dom";
const SocialEvent = () => {
  const socialEvents = [
    {
      id: 1,
      title: "Touch a Life and Make a Difference",
      img:img3,
      time: "Every Easter",
    },
    {
      id: 1,
      title: "Reach out and Lift a Soul",
      img:img4,
      time: "Every Christmas",
    },
  ];

  return (
    <div className="social-wrap">
      <div className="events">
        {
          socialEvents.map((event, img)=>{
            return (
              <div className="event-card">
                <div className="event-img">
                  <img src={event.img} alt="" />
                </div>
                <div className="event-desc">
                  <h4>{event.title}</h4>
                  <p>{event.time}</p>
                  <p>To be disclosed: <Link className="contact-btn" to='/contact'>Contact Us</Link></p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default SocialEvent;
