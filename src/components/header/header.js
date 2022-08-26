import personalImage from '../../assets/images/pexels-pixabay-163194.jpg';
import TypeAnimation from 'react-type-animation';
import ScrollDown from '../../assets/icons/arrow_down.webp';
import Github from '../../assets/icons/github-brands.svg';
import Linkedin from '../../assets/icons/linkedin-brands.svg';
import Kaggle from '../../assets/icons/kaggle-brands.svg';

import CVFile from '../../assets/files/CV.pdf';

import "./header.scss";
const Header = () => {
    return (
        <div className="header">
            <div className="header-image">
                <img src={personalImage} alt="personal" />
            </div>
            <h1 className='header-text header-text__first'>nguyen</h1>
            <h1 className='header-text header-text__second'>trong son</h1>
            <h2 className='header-text header-text__third'>i'm </h2>
            <div>
                <TypeAnimation cursor={true}
                    sequence={[
                        'developer', 3000, ' ', 3000,
                        'designer', 3000, ' ', 3000,
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                    className='header-text header-text__fourth' />
            </div>
            <div className="header-scroll_down">
                <div className="header-scroll_down-text">
                    <p>Scroll</p>
                    <p>Down</p>
                </div>
                <img src={ScrollDown} alt="scroll down" />
            </div>
            <a href={CVFile} target="_blank" rel="noopener noreferrer" className="header-cv" download="CV_SonNguyen">
                <button className="header-btn btn btn-black" >Download CV</button>
            </a>
            <div className="header-social">
                <a href="https://github.com/DOS-SonNguyen" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/trongsonnguyen95" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin" /></a>
                <a href="https://www.kaggle.com/darkocean" target="_blank" rel="noopener noreferrer"><img src={Kaggle} alt="kaggle" /></a>
            </div>
            <hr />
        </div>
    );
}

export default Header;