import React, { useEffect, useState } from "react";

import AccomodationCard from './AccomodationCard';
import { fetchAllAccomodations } from "../api/api";



function AllAccomodations() {

    const [accomodations, setAccomodations] = useState([]);

    useEffect(() => {
        fetchAllAccomodations()
            .then(result => {
                setAccomodations(result)
            })
            .catch(err => {
                // Gérez les erreurs ici
            });
    }, [])
        
    
    return (
        <div className="all-accomodation container">
            {accomodations.map(accomodation => (
                <AccomodationCard
                    key={accomodation.id}
                    id={accomodation.id}
                    image={accomodation.cover}
                    title={accomodation.title} />
            ))}

        </div>
    );
}

export default AllAccomodations;
