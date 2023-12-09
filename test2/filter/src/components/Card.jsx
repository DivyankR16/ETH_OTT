import React from "react";

export default ({ VideoURL, action, comedy, discription, duration, education, gaming, movies, music, name }) => {
    return (
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6>{discription}</h6>
                TAG : {action && <span>action</span>} {comedy && <span>comedy</span>} {education && <span>education</span>} {movies && <span>movies</span>} {music && <span>music</span>} {gaming && <span>gaming</span>}
                <p className="card-text">Duration : {duration}</p>
                <a href="#" className="btn btn-primary">Url : {VideoURL}</a>
            </div>
        </div>
    )

}