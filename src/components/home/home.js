import Header from '../header/header';
import About from '../about/about';
import Skills from '../skills/skills';

import "./home.scss";
const Home = () => {
    return (
        <div className="Home">
            <Header />
            <About />
            <Skills />
        </div>
    );
}

export default Home;