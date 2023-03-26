import React, { useState } from "react";
import './About.css'
import ME from '../../assets/logo512.png'
import { works } from "../../data";

function About() {

  return (
    <section id="about">
      <h2>ABOUT ME</h2>

      <div className="about__container">
          <p>
            From my experiences, I have wide range of skills and most of them are skills that I learned by myself to adapt with the work requirements.
            This shows my high adaptability to learn new skills
          </p>

          <button className='btn-primary'><a href="#contact">Contact</a></button>


      </div>
    </section>
  );
}

export default About