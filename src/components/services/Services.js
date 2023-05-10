import React from 'react'
import "./services.css"
import { useState } from 'react';


export default function Services() {
    const [toggleState,setToggleState]=useState(0);

    const toggleTab= (index) =>{
        setToggleState(index);
    }
  return (
    
    <section className='services section' id='services'>
        <div className='about_titles'>
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">My offer</span>
        </div>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Wordpress <br /> Developer</h3>
                </div>

                <span className="services_button" onClick={ () =>toggleTab(1)}>View More { " "}
                <i  className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState == 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_model-content">
                        <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Wordpress <br /> Developer</h3>
                        <p className="services_modal-description">Service with more than 3 years of experience.
                        Providing quality work to clients and companies.</p>


                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Highly skilled in Elementor Page Builder.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Experience in hosting, DNS, backuping, etc</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Knowledge of Photoshop or Adobe XD or Illustrator.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Having experience with HTML5, CSS, APIs, Payment gateways..</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Web <br /> Developer</h3>
                </div>

                <span className="services_button" onClick={ () =>toggleTab(2)}>View More { " "}
                <i  className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState == 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_model-content">
                        <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Web <br /> Developer</h3>
                        <p className="services_modal-description">Service with more than 6 months of experience.
                        Providing quality work to clients and companies.</p>


                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">I develop the user interface.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Teamwork coordination ability</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Having experience with HTML5, CSS, Javascript, PHP</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">React <br /> Developer</h3>
                </div>

                <span className="services_button" onClick={ () =>toggleTab(3)}>View More { " "}
                <i  className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState == 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_model-content">
                        <i onClick={() =>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">React  <br /> Developer</h3>
                        <p className="services_modal-description">I am a freasher to this field</p>


                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Ability to Research and work</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Web page development.</p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Teamwork coordination ability</p>
                            </li>
                            
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Active communication capability and
                                    problem solving</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>    
  )
}
