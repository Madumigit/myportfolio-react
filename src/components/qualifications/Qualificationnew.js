import React from 'react'
import "./qualification.css"
import { useState } from 'react';

export default function Qualificationnew() {
    const [toggleState,setToggleState]=useState(1);

    const toggleTab= (index) =>{
        setToggleState(index);
    }
  return (
    <section className="qulification section" id='qualifications'>
        <div className='about_titles'>
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey</span>
        </div>
        
        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 
                 ? "qualification_button qualification_active button--flex"
                 : "qualification_button button--flex"}
                 onClick={() => toggleTab(1)}
                 
                 >
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>
                <div className={toggleState === 2 
                 ? "qualification_button qualification_active button--flex"
                 : "qualification_button button--flex"} 
                 onClick={() => toggleTab(2)}
                 >
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>
                
            </div>

            <div className="qualification_sections">
                <div className={ toggleState ===1 
                ? "qualification_content qualification_content-active" 
                : "qualification_content" }>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Degree</h3>
                            <h2 className="qualification_subtitle">Software Engineering (BSc) Hons</h2>
                            <span className="qualification_subtitle">(Successfully completed)</span>
                            <span className="qualification_subtitle">University College of Bedfordshire
                                    (Sliit Academy)</span>
                            <div className="qualification_calender">
                            <i class="uil uil-calendar-alt"></i>2019 Oct-2020 June
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className='qualification_line'></span>
                        </div>


                        <div>
                            <h3 className="qualification_title">Higher Diploma </h3>
                            <h2 className="qualification_subtitle">Software Engineering</h2>
                            <span className="qualification_subtitle">(Successfully completed)</span>
                            <span className="qualification_subtitle">National Institute of Business
                                    Management (NIBM)</span>
                            <div className="qualification_calender">
                            <i class="uil uil-calendar-alt"></i>2018 March-2019 March
                            </div>
                        </div>
                       
                    </div>
                    <div className="qualification_data">
                    <div>
                            <h3 className="qualification_title">Diploma</h3>
                            <h2 className="qualification_subtitle">National Institute of Business
                                Management (NIBM)</h2>
                            <span className="qualification_subtitle">(Successfully completed)</span>
                            <span className="qualification_subtitle">University College of Bedfordshire
                                    (Sliit Academy)</span>
                            <div className="qualification_calender">
                            <i class="uil uil-calendar-alt"></i>2017 March-2018 March
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    
                </div>

                <div className={ toggleState === 2 
                ? "qualification_content qualification_content-active" 
                : "qualification_content" }>
                    <div className="qualification_data">
                       <div>
                            <h3 className="qualification_title">Web Developer</h3>
                            <span className="qualification_subtitle">Astrizon (PVT)Ltd.
                                    Electronic City Phase 2, Bengaluru,
                                    India</span>       
                            <span className="qualification_subtitle">(Full time)</span>
                            <div className="qualification_calender">
                            <i class="uil uil-calendar-alt"></i>2022 September-2023 April
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className='qualification_line'></span>
                        </div>


                        <div>
                            <h3 className="qualification_title">WordPress Developer</h3>
                            <span className="qualification_subtitle">BenWorldwide (PVT)Ltd.
                                54, Siripa Road, Colombo5,
                                Sri Lanka</span>       
                            <span className="qualification_subtitle">(Full time)</span>
                            <div className="qualification_calender">
                            <i class="uil uil-calendar-alt"></i>2021 January-2022 June 
                            </div>
                        </div>
                       
                    </div>
                    <div className="qualification_data">
                         <div>
                            <h3 className="qualification_title">WordPress Developer</h3>
                            <span className="qualification_subtitle">Monzoon Company.
                                Talangama, Baththaramulla,
                                Sri Lanka</span>       
                            <span className="qualification_subtitle">(Part time)</span>
                            <div className="qualification_calender">
                            <i class="uil uil-calendar-alt"></i>2020 November-2021 May 
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
    </section>
  )
}
