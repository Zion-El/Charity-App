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
  const events = socialEvents.map((event)=>{
    return(
      <Col key={event.id} lg={6} md={12} sm={12}>
      <Card className="event-wrap border-0">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="event-image">
              <img src={event.img} alt="eventlogo" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="event-content">
              
              <h4>{event.title}</h4>
              <p>
                <i className="fas fa-clock">&nbsp; </i>{event.time}
              </p>
              <p>
                <i className="fas fa-map"></i> To be disclosed <Link className="contact-btn" to='/contact'>Contact Us</Link>
              </p>
              {/* <p>
                <i className="fas fa-calender"></i>{event.time}
              </p> */}
            </div>
          </Col>
          
        </Row>
      </Card>
    </Col>
    )
  })
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
