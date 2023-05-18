import React from "react";

function Banner({image, title}) {
    return (
        <>
        <img src={image} alt="rivière entourée de montagnes sauvages" />
        {title && <h1>{title}</h1>}        
        </>
    );
}

export default Banner;