import logo from '../../assets/icons/angrycreative-brands.svg';
import "./nav.scss";
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-links">
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