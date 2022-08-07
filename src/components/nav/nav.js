import { useState, useEffect } from 'react';
import logo from '../../assets/icons/angrycreative-brands.svg';
import "./nav.scss";
const Nav = () => {
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={sticky ? 'navbar sticky' : 'navbar'}>
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar__links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
            </div>
        </nav>

    );
}

export default Nav;