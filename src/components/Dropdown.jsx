import React from "react";


function Dropdown({title, text}) {
    return (
        <div className="dropdown">
            {title && <h2>{title}</h2>}
            {text && <p>{text}</p>}
        </div>
    )
}

export default Dropdown;