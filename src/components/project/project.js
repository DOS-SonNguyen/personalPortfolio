import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./project.scss"

import longArrowLeft from '../../assets/icons/long-arrow-left.svg';
import longArrowRight from '../../assets/icons/long-arrow-right.svg';
import testImage from "../../assets/images/pexels-pixabay-163194.jpg";
import adImage from "../../assets/images/assignment_dashboard.png";

const Project = () => {
    const projectData = [
        {
            name: "sample",
            image: testImage,
            src: "#",
            description: "Lorem ipsum dolor sit"
        },
        {
            name: "assignment dashboard",
            image: adImage,
            src: "https://assignment-dashboard-pern.herokuapp.com/",
            description: "PERN application"
        },
        {
            name: "sample",
            image: testImage,
            src: "#",
            description: "Lorem ipsum dolor sit"
        }
    ];

    function ArrowRightAltIcon(props) {
        return (
            <svg {...props}>
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            </svg>
        );
    }
    return (
        <div className="project">
            <h1>project</h1>
            <div className="project__container">
                <CarouselProvider
                    naturalSlideWidth={400}
                    naturalSlideHeight={250}
                    totalSlides={projectData.length}
                    visibleSlides={1}
                    currentSlide={1}
                    infinite={true}
                >
                    <Slider>
                        {projectData.map((project, index) => {
                            return (
                                <Slide index={index} key={index} className="project__container__slide">
                                    <a href={project.src} target="_blank">
                                        <img src={project.image} alt={project.name} className="project__container__slide__image" />
                                        <div className="project__container__slide__description">
                                            <h2>{project.name}</h2>
                                            <p>{project.description}</p>
                                        </div>
                                    </a>

                                </Slide>
                            );
                        }
                        )}
                    </Slider>
                    <div className='project__container__button'>
                        <ButtonBack className='project__container__button--back'><img src={longArrowLeft} /></ButtonBack>
                        <span className='project__container__button__title'><a href='https://github.com/DOS-SonNguyen' target="_blank">See all</a></span>
                        <ButtonNext className='project__container__button--next'><img src={longArrowRight} /></ButtonNext>
                    </div>

                </CarouselProvider>
            </div>
        </div>
    )
}

export default Project;