import React, { useEffect, useState } from "react";
import { fetchAllAccomodations } from "../api/api";
import { useLocation } from 'react-router-dom';


import Header from "../components/Header";



function AccomodationPage() {

    const location = useLocation();
    const pathname = location.pathname;
    const segments = pathname.split('/');
    const idAccomodation = segments[segments.length - 1];


    const [accomodation, setAccomodation] = useState([]);
    
    useEffect(() => {
        fetchAllAccomodations()
            .then(result => {
                setAccomodation((result.filter(item => item.id === idAccomodation))[0]);                
            })
            .catch(err => {
                // Gérez les erreurs ici
            });
    }, [])
    

    return (
        <>
            <Header />  
            <div>fiche logement</div>

            <img src={accomodation.cover} alt="" />
            <h1>{accomodation.title}</h1>

        </>

    );

}

export default AccomodationPage;