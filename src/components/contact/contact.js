import Github from '../../assets/icons/github-brands.svg';
import Linkedin from '../../assets/icons/linkedin-brands.svg';
import Kaggle from '../../assets/icons/kaggle-brands.svg';


import "./contact.scss";
const Contact = () => {
    return (
        <div className="contact">
            <h1>contact</h1>
            <hr />
            <div className="contact__container">
                <div className="contact__container__left">
                    Get in touch
                </div>
                <div className="contact__container__middle">
                    <h3>NGUYEN TRONG SON</h3>
                    <p>College of Information Science and Engineering, Ritsumeikan University</p>
                    <p>Kusatsu, Shiga, Japan</p>
                </div>
                <div className="contact__container__right">
                    <h3>CONTACT</h3>
                    <div>
                        <p><a href="mailto:sonnguyenlqd@gmai.com">sonnguyenlqd@gmail.com</a></p>
                        <p>(080)-2733-4345</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="contact__footer">
                <p>© 2021 Nguyen Trong Son</p>
                <button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }} className="contact__footer__button">BACK TO TOP</button>
                <div className="contact__footer__social">
                    <a href="https://github.com/DOS-SonNguyen" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/trongsonnguyen95" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin" /></a>
                    <a href="https://www.kaggle.com/darkocean" target="_blank" rel="noopener noreferrer"><img src={Kaggle} alt="kaggle" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;