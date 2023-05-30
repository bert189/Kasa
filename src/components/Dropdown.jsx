import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function Dropdown({title, content}) {
    
    const [open, setOpen] = useState(false);
    
    function toggleDropdown() {
        setOpen(!open);
    }
    
    const chevronDown = <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
    const chevronUp = <FontAwesomeIcon icon={faChevronUp} className="chevron"/>

    return (
        <div className="dropdown">
            <div className="dropdown__title-wrapper" onClick={toggleDropdown}>
                {title && <h2>{title}</h2>}
                {!open ? chevronDown : chevronUp}
            </div>
            {open && <div> 
                <div className="dropdown__content">{content}</div>
            </div>}
        </div>
    )
}

export default Dropdown;