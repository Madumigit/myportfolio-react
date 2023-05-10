import React from 'react'
import "./testimonial.css"
import { Data } from "./Data";

export default function Testimonial() {
  return (
   <section className="testimonial container section">
    <div className='about_titles'>
        <h2 className="section_title">My clients say </h2>
        <span className="section_subtitle">Testimonial</span>
        </div>

        <div className="testimonial_container">
            { Data.map(({id,image,title,description}) => {
                return(
                    <div className='testimonial_card' key={id}>
                        <img src="{image}" alt="" className="testimonal_img" />
                        <h3 className="testimonial_name">{title}</h3>
                        <p className="testimonial_description">{description}</p>

                    </div>
                )
            })}
            
        </div>
   </section>
  )
}
