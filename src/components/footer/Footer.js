import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Madumi</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>
                <li>
                    <a href="#qualifications" className="footer_link">Qualifications</a>
                </li>
                <li>
                    <a href="#contact" className="footer_link">Contact</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://www.linkedin.com/in/madumi-ashanthika" className="home_social-icon" target='_blank'><i class="uil uil-linkedin"></i></a>
        <a href="mailto:madumiashanthika25@gmail.com" className="home_social-icon" target='_blank'><i class="uil uil-envelope"></i></a>
        <a href="https://github.com/Madumigit/" className="home_social-icon" target='_blank'><i class="uil uil-github-alt"></i></a>
            </div>

                <span className="footer_copy">All rights reserved</span>
        </div>
    </footer>
  )
}
