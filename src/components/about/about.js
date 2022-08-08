import "./about.scss";
import calendarIcon from "../../assets/icons/calendar-solid.svg";
import upRightFromSquare from "../../assets/icons/up-right-from-square-solid.svg";

const About = () => {
    return (
        <div className="about">
            <h1>about</h1>
            <div className="about__descr">
                <p>Driven student leveraging studies in Information Technology with formal knowledge gained through excellent classroom performance seeks an internship opportunity to expand skills and gain valuable real-world as well as working experiences.</p>
            </div>
            <div className="about__container">
                <div className="about__title">
                    <h2>Scholarship</h2>
                    <h2>Education</h2>
                </div>
                <div className="about__sections">
                    <div className="sections__content">

                        <div className="section__data section__education">
                            <div></div>

                            <div>
                                <span className="section__rounder"></span>
                                <span className="section__line"></span>
                            </div>

                            <div className="education__info">
                                <h3 className="section__title">Bachelor of Engineering</h3>
                                <span className="section__subtitle">Ritsumeikan University - Japan</span>
                                <div className="section__date">
                                    <img src={calendarIcon} alt="calendar" className="calendar-icon" />
                                    <span>April 2020 - March 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="section__data section__scholarship">

                            <div className="scholarship__info">
                                <h3 className="section__title">JASSO Scholarship</h3>
                                <span className="section__subtitle">Japan</span>
                                <div className="section__date">
                                    <img src={calendarIcon} alt="calendar" className="calendar-icon" />
                                    <span>April 2020 - March 2021</span>
                                </div>
                            </div>

                            <div>
                                <span className="section__rounder"></span>
                                <span className="section__line"></span>
                            </div>
                        </div>

                        <div className="section__data section__education">
                            <div></div>

                            <div>
                                <span className="section__rounder"></span>
                                <span className="section__line"></span>
                            </div>

                            <div className="education__info">
                                <h3 className="section__title">DeepLearning.AI Tensorflow Developer</h3>
                                <span className="section__subtitle">Certification - Cousera<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/LR84EYNP4UPT" target="_blank" rel="noopener noreferrer" className="link-icon"><img src={upRightFromSquare} alt="up right from square"/></a></span>
                                <div className="section__date">
                                    <img src={calendarIcon} alt="calendar" className="calendar-icon" />
                                    <span>Feb 2022</span>
                                </div>
                            </div>


                        </div>

                        <div className="section__data section__scholarship">

                            <div className="scholarship__info">
                                <h3 className="section__title">Japan Material Foundation Scholarship</h3>
                                <span className="section__subtitle">Japan</span>
                                <div className="section__date">
                                    <img src={calendarIcon} alt="calendar" className="calendar-icon" />
                                    <span>August 2022 - March 2023</span>
                                </div>
                            </div>

                            <div>
                                <span className="section__rounder"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr />
        </div >
    );
}

export default About;