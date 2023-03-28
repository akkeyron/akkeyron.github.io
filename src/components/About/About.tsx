import React, { useState } from "react";
import './About.css'
import ME from '../../assets/logo512.png'
import { works } from "../../data";

function About() {

  return (
    <section id="about">
      <h2><span className="gradient-text">ABOUT ME</span></h2>

      <div className="about__container">
          <p className="about__me">
            I have 3 years of work experiences, in semiconductor field and software development field. I built various chat bot and web application to practice my skills.
            I am interested in exploring more on cloud technologies and becoming a cloud engineer. I also love keeping up to date with the latest and greatest technology development.
          </p>

      </div>
    </section>
  );
}

export default About