import "./progress.scss"

const Progress = ({name, percentage}) => {
    return (
        <div className="progress">
            <div className="progress__title">
                <span>{name}</span>
                <div>
                    <span>{percentage}%</span>
                </div>
            </div>
            <div className="progress__container">
                <div className="progress__bar" style={{ width: percentage + "%"}}></div>
            </div>
        </div>
    );
}

export default Progress;