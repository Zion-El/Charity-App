import React from 'react';
import "./mission.css";
import {  Row, Col, Card, Container } from 'react-bootstrap';
import img1 from "../../asset/food.jpg";
import img2 from "../../asset/education.jpg";
const Mission = () => {
    const missions = [{
        id:1,
        title: "Food Supplies to Orphanages",
        content: "We reach out to several orphanages in the country to distribute relief items, clothings and groceries. This is mostly done during festive seasons",
        img:img1
    },
    {
        id:2,
        title: "Financial Empowerment for Widows and Aged Women",
        content: "We work directly with communities to ensure that widows and old women can have a sustainable means of livelihood through skills and capital development",
        img:"https://togetherwomenrise.org/wp-content/uploads/2020/09/GFW-Brookbank-Korogocho-2.jpg"
    },
    {
        id:3,
        title: "Sharing of Educational Materials and Clothings to children living in slums",
        content: "Through our initiative, we are able support children of underserved and remote communities in Nigeria to provide educational materials needed in learning.",
        img:img2
    }]

    
  return (

        <section className='mission-w'>
            <div className="mission-top">
                <p>What We Are Doing</p>
                <h2>
                We are on a mission to help the most vulnerable 
                </h2>
            </div>
            <div className='mission-box'>
                {
                    missions.map((mis, index)=>{
                        return(
                            <div key={index} className='mis-card'>
                                <div>
                                    <img src={mis.img} alt="" />
                                </div>
                                <div className='desc'>
                                    <h4>{mis.title}</h4>
                                    <hr/>
                                    <p>{mis.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
  )
}

export default Mission