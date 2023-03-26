import './Projects.css'
import { projects } from '../../data.js'
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
    return (
        <section id='projects'>
            <h2>My Projects</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                {
                    projects.map(({ id, title, image, overview, github }) => {
                        return (
                            <SwiperSlide key={id} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={image} alt={title} />
                                </div>
                                <h5 className='client__name'>{title}</h5>
                                <small className='client__review'>{overview}</small>
                                <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </section>
    )
}

export default Projects