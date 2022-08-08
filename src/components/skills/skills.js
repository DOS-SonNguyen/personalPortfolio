import Progress from "../propress/progress";

import "./skills.scss";
const Skills = () => {
    return (
        <div className="skills">
            <h1>skills</h1>
            <div className="skills__container">
                <div className="skills__container__left">
                    <h2>Web Development</h2>
                    <Progress name="HTML + CSS" percentage="100" />
                    <Progress name="JavaScript" percentage="70" />
                    <Progress name="React" percentage="80" />
                </div>

                <div className="skills__container__middle">
                    <h2>ML/AI</h2>
                    <Progress name="Python" percentage="90" />
                    <Progress name="Tensorflow" percentage="70" />
                    <Progress name="OpenCV" percentage="60" />
                </div>

                <div className="skills__container__right">
                    <h2>Languages</h2>
                    <Progress name="English" percentage="90" />
                    <Progress name="Japanese" percentage="60" />
                    <Progress name="Vietnamese" percentage="100" />
                </div>
            </div>
        </div>
    );
}

export default Skills;