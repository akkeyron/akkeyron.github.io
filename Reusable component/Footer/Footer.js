import React from "react";
import "./Footer.css"
import { GrMail, GrLinkedin, GrGithub } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">LOQMAN</a>

            <ul className="permalinks">
                <li><a href="#">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#testimonials">TESTIMONIALS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>

            <div className="footer__socials">
                {/**Put icon social here */}
                <a href="mailto:loqmanhakim74@gmail.com"><GrMail /></a>
                <a href="https://www.linkedin.com/in/loqman-al-hakim-aripin/"><GrLinkedin /></a>
                <a href="https://github.com/akkeyron"><GrGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Loqman, All rights reserved</small>
            </div>

        </footer>
    )
}

export default Footer