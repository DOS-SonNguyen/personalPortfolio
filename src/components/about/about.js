import "./about.scss";
import vtBar1 from "../../assets/icons/vtBar1.svg";
import vtBar2 from "../../assets/icons/vtBar2.svg";

const About = () => {
    return (
        <div className="about">
            <h1>about</h1>
            <div className="about__intro">
                <p>Driven student leveraging studies in Information Technology with formal knowledge gained through excellent classroom performance seeks an internship opportunity to expand skills and gain valuable real-world as well as working experiences.</p>
            </div>
            <div className="about__content">
                <div className="about__content__left">
                    <div className="about__content__left__certificate">
                        <h2>Certifications</h2>
                        <div className="about__content__left__certificate__items">
                            <img src={vtBar1} className="about__content__left__certificate__items__vertical-bar" alt="vertical bar 1"></img>
                            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/LR84EYNP4UPT" target="_blank" rel="noopener noreferrer">DeepLearning.AI Tensorflow Developer (Feb 2022)</a>
                        </div>
                    </div>
                    <div className="about__content__left__scholarship">
                        <h2>Scholarships</h2>
                        <div className="about__content__left__scholarship__items">
                            <img src={vtBar2} className="about__content__left__scholarship__items__vertical-bar" alt="vertical bar 2"></img>
                            <div className="about__content__left__scholarship__items__info">
                                <p className="jasso">JASSO Scholarship</p>
                                <p className="jp-mf">Japan Material Foundation Scholarship</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__content__vertical-line"></div>
                <div className="about__content__right">
                    <div className="about__content__right__education">
                        <h2>Education</h2>
                        <div className="about__content__right__education__items">
                            <img src={vtBar1} className="about__content__right__education__items__vertical-bar" alt="vertical bar 1"></img>
                            <div className="about__content__right__education__items__info">
                                <p className="university">Ritsumeikan University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;