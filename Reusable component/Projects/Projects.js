import React from "react";
import { projects } from "../../data";
import './Projects.css'
import IMG from '../../assets/logo512.png'

function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <h5>Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          projects.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>

              </article>
            )
          })
        }
      </div>
    </section>
  );
}

export default Projects