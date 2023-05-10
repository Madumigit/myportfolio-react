import React from 'react'

export default function Info() {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i class='bx bx-award about_icon'></i>
          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">3 Years Working in web development</span>
        </div>
        
        <div className="about_box">
        <i class='bx bx-support about_icon' ></i>
          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">More than 12 projects in wordpress</span>
        </div>


        <div className="about_box">
        <i class='bx bx-briefcase-alt about_icon' ></i>
          <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">2 Projects in React</span>
        </div>

       
    </div>
  )
}
