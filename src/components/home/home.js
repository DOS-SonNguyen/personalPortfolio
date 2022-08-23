import Header from '../header/header';
import About from '../about/about';
import Skills from '../skills/skills';
import Project from '../project/project';

import "./home.scss";
const Home = () => {
    return (
        <div className="Home">
            <Header />
            <About />
            <Skills />
            <Project />
        </div>
    );
}

export default Home;