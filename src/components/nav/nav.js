import { useState, useEffect } from 'react';


import Github from '../../assets/icons/github-brands.svg';
import Linkedin from '../../assets/icons/linkedin-brands.svg';
import Kaggle from '../../assets/icons/kaggle-brands.svg';
import Leetcode from '../../assets/icons/leetcode-brands.svg';
import ThreeBar from '../../assets/icons/bars-solid.svg';

import "./nav.scss";
const Nav = () => {
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true);
            console.log(window.scrollY);
        } else {
            setSticky(false);
        }
    }

    const handleScrollToY = (y) => {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={sticky ? 'navbar sticky' : 'navbar'}>
            <button className="navbar__list-icon">
                <img src={ThreeBar} alt="three bar" />
            </button>
            <div className="navbar__links">
                <li className ="navbar__links__item" onClick={() => handleScrollToY(0)}>Home</li>
                <li className ="navbar__links__item" onClick={() => handleScrollToY(720)}>About</li>
                <li className ="navbar__links__item" onClick={() => handleScrollToY(1440)}>Skill</li>
                <li className ="navbar__links__item" onClick={() => handleScrollToY(1920)}>Project</li>
                <li className ="navbar__links__item" onClick={() => handleScrollToY(2640)}>Contact</li>
            </div>
            <div className='navbar__social'>
                <a href="https://github.com/DOS-SonNguyen" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/trongsonnguyen95" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin" /></a>
                <a href="https://www.kaggle.com/darkocean" target="_blank" rel="noopener noreferrer"><img src={Kaggle} alt="kaggle" /></a>
                <a href="https://leetcode.com/joson_nyun" target="_blank" rel="noopener noreferrer"><img src={Leetcode} alt="leetcode" /></a>
            </div>

        </nav>

    );
}

export default Nav;