import React, { useEffect, useState } from "react";

import AccomodationCard from './AccomodationCard';
import { fetchAllAccomodations } from "../api/api";



function AllAccomodations() {

    const [accomodations, setAccomodations] = useState([]);

    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchAllAccomodations();
                setAccomodations(result);                
            }
            catch (error){
                console.error('Erreur lors de la récupération des données :', error);
                return null;
            }
        }
        loadData();
    }, [])
        
    
    return (
        <div className="all-accomodation">
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
