import React from "react";
import Card from './Card';

export default ({ data }) => {
    let i = 0
    const newdata = data.map((element) => <Card key={i++} VideoURL={element.VideoURI} action={element.action} comedy={element.action} discription={element.discription} duration={element.duration} education={element.education} gaming={element.gaming} movies={element.movies} music={element.music} name={element.name} />)
    return (
        <>
        { newdata }
        </>
    )
}