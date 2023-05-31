import React, { useState, useEffect } from "react";
import { skills } from "../../data";
import './Skills.css'

export default function Skills() {
  const [showList, setShowList] = useState<boolean>(false);


  // skill_button.addEventListener("click", event => {
  //   // if (skill_button) {
  //   const skill_list = document.getElementsByClassName("skill__list")[0];
  //   skill_list.classList.add("show");



  // })

  useEffect(() => {
    const skill_button = document.querySelectorAll(".skill-button");

    skill_button.forEach(element => {
      element.addEventListener('click', () => {
        const target = element.previousElementSibling;
        if (target?.classList.contains("show")) {
          target.classList.remove("show");
          target.previousElementSibling?.classList.remove("hide");
        }
        else {
          target?.classList.add("show");
          target?.previousElementSibling?.classList.add("hide");
        }
      })
    });
  }, [])


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

            <button className="skill-button" type="button">Click for list of skills</button>

          </div>
        ))}
      </div>
    </section>
  );
}