import React from "react";

function Banner({image, alt, titleFirst, titleSecond}) {
    return (
        <div className="banner">
            <img src={image} alt={alt} />
            <h1>
                <span>{titleFirst}&nbsp;</span>
                <span>{titleSecond}</span>
            </h1>   
        </div>
    );
}

export default Banner;