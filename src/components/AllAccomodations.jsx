import React, { useEffect, useState } from "react";

import AccomodationCard from './AccomodationCard';
import { fetchAllAccomodations } from "../api/api";
import { NavLink } from "react-router-dom";


function AllAccomodations() {

    const [accomodations, setAccomodations] = useState([]);

    useEffect(() => {
        fetchAllAccomodations()
            .then(result => {
                setAccomodations(result)
            })
            .catch(err => {
                // Gérez les erreurs ici
                console.log(err);
            });
    }, [])
        
    
    return (
        <div>
            {accomodations.map((accomodation => (
                <NavLink key={"link-to"+accomodation.id} to={"/fiche-logement/"+accomodation.id} end>
                    <AccomodationCard key={accomodation.id} image={accomodation.cover} title={accomodation.title} />
                </NavLink>
            )))}

        </div>
    );
}

export default AllAccomodations;
