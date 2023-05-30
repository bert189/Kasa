import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'



function Carrousel({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const currentPicture = pictures[currentIndex];

    
    function previous() {
        setCurrentIndex((currentIndex + pictures.length - 1) % pictures.length);
    }

    function next() {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    }

    const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} className="chevron chevron-left" onClick={previous} />;
    const chevronRight = <FontAwesomeIcon icon={faChevronRight} className="chevron chevron-right" onClick={next} />;
    const pageIndicator = <div className="carrousel__page-indicator">{(currentIndex + 1)} / {pictures.length}</div>;

    return (
        <div className="carrousel">
            <img src={currentPicture} alt="" />
            {pictures.length === 1 ? <></> : chevronLeft}
            {pictures.length === 1 ? <></> : chevronRight}
            {pictures.length === 1 ? <></> : pageIndicator}
        </div>
    )
}

export default Carrousel