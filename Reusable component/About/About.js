import React from "react";
import './About.css'
import ME from '../../assets/logo512.png'

function About() {
  return (
    <section id="about">
      <h5>Test</h5>
      <h2>About Loqman</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Profile Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/** put icon here */}
              <h5>Experience</h5>
              <small>3 years experience</small>
            </article>
            <article className="about__card">
              {/** put icon here */}
              <h5>Experience</h5>
              <small>3 years experience</small>
            </article>
            <article className="about__card">
              {/** put icon here */}
              <h5>Experience</h5>
              <small>3 years experience</small>
            </article>
          </div>

          <p>
            Lorem asdasdfa wf adsf wqef asdf wef asf
          </p>

          <a href="#contact" className="btn btn-primary">Contact</a>

        </div>


      </div>
    </section>
  );
}

export default About