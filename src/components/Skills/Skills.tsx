import React from "react";
import { skills } from "../../data";
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <h2><span className='section-title'>Skills</span></h2>

      <div className="card-container">
        {skills.map((skill) => (
          <div className="skill__card">
            <h3 className="card__title">{skill.title}</h3>
            <p className="card__description">{skill.description}</p>

            <div className="skill__list">
              <ul>
                {skill.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <button className="btn skill-button">Click for list of skills</button>

          </div>
        ))}
      </div>
    </section>
  );
}