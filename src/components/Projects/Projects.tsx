import './Projects.css'
import { projects } from '../../data.js'
import React, { FC } from "react";

const Projects: FC = () => {
    return (
        <section id='projects'>
            <h2><span className='section-title'>Projects</span></h2>
            <div className='projects__container'>
                {projects.map((project) => (
                    <div className='project__card'>
                        <div className="project__icon">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3 className='project__title'>{project.title}</h3>
                        <p className='project__description'>{project.overview}</p>

                        <div className='project__stacks'>
                            {project.stacks.map((stack) => (
                                <button className="project__stack" key={stack}>
                                    {stack}
                                </button>
                            ))}
                        </div>
                        <div className='card__buttons'>
                            <a href={project.github} className='btn card-btn' target='_blank'>Github</a>
                            <a href={project.github} className='btn card-btn-primary' target='_blank'>Demo</a>
                        </div>

                    </div>

                ))}
            </div>
        </section>
    )
}

export default Projects