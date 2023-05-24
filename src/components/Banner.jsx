import React from "react";

function Banner({image, title}) {
    return (
        <div className="banner container">
            <img src={image} alt="rivière entourée de montagnes sauvages" />
            {title && <h1>{title}</h1>}        
        </div>
    );
}

export default Banner;