import personalImage from '../../assets/images/pexels-pixabay-163194.jpg';
import TypeAnimation from 'react-type-animation';
import ScrollDown from '../../assets/icons/arrow_down.webp';
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
                        'developer', 5000, ' ', 5000,
                        'designer', 5000, ' ', 5000,
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
            <div className="header-social">
            </div>
        </div>
    );
}

export default Header;