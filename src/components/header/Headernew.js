import React, { useState } from 'react'
import './header.css'

export default function Headernew() {

    /*=============== Change background header ===============*/

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        // when the scroll is higher than 200 viewport height, add the scroll-header 
        //class to a tag with the header tag
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    } )



    /*=============== Toggle Menu ===============*/
    const[Toggle,showMenu] =useState(false);
    const [activeNav,setActiveNav] = useState("#home");

  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className="nav_logo">Madumi</a>

            <div className={Toggle ? "nav_menu show-menu": "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" className={
                            activeNav === " #home" ? "nav_link active-link" 
                            : "nav_link "} onClick={() => setActiveNav('#home')} >
                            <i class="uil uil-estate nav_icon active-link"></i>Home
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i class="uil uil-user nav_icon"></i>About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i className='uil uil-file-alt nav_icon'></i>Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#services" className="nav_link">
                            <i className='uil uil-briefcase-alt nav_icon'></i>Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#qualifications" className="nav_link">
                            <i className='uil uil-scenery nav_icon'></i>Qulifications
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className='uil uil-message nav_icon'></i>Contact
                        </a>
                    </li>
                </ul>

                <i className='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>

            </div>
            <div className='nav_toggle' onClick={() => showMenu(!Toggle) }>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}
