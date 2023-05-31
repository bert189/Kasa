import React, { useEffect, useState } from "react";
import { fetchAllAccomodations } from "../api/api";
import { useParams, Navigate } from 'react-router-dom';

import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";



function AccomodationPage() {

    const currentLocation = useParams();
    const idAccomodation = currentLocation.idLogement;

    const [accomodation, setAccomodation] = useState(null);
    const [idExist, setIdExist] = useState(false); 

    useEffect(() => {
        fetchAllAccomodations()
            .then((result) => {
                setAccomodation((result.find(item => item.id === idAccomodation)));
                if (accomodation.id) {
                    setIdExist(true)
                }           
                // setIdExist(result.some(item => item.id === idAccomodation));               
            })
            .catch(err => {
                setIdExist(false)
            });
    }, [idExist])      



    // opérateur de validation de chaînage optionnel (?.) + initial state = null
    // évite accomodation undefined le temps de la résolution de l'appel api asynchrone
    const pictures = accomodation?.pictures || [] ;
    const title = accomodation?.title || [] ;
    const location = accomodation?.location || [] ;
    const host = accomodation?.host || [] ;
    const tags = accomodation?.tags || [] ;
    const rating = accomodation?.rating || [] ;
    const description = accomodation?.description || [] ;
    const equipments = accomodation?.equipments || [] ;

    const fullName = host.name || '';
    const [firstName, lastName] = fullName.split(" ");

    console.log(idExist)
    
    if (!idExist) {
        // redirection vers page 404
        return <Navigate to="/logement-introuvable/"></Navigate>;
    }

    return (
        <>
            <Header />
            <main className="accomodation container">
                <Carrousel pictures={pictures} />
                <div className="infos-wrapper">
                    <section className="accomodation__infos infos-1">
                        <h1>{title}</h1>
                        <h3>{location}</h3>
                        <Tags tags={tags} />
                    </section>
                    <section className="accomodation__infos infos-2">    
                        <Host firstName={firstName} lastName={lastName} picture={host.picture} />     
                        <Rating rating={rating} />
                    </section>
                </div>
                <section className="accomodation__details">
                    <Dropdown key="0" title="Description" content={description} />
                    <Dropdown key="1" title="Équipements" content={<ul>{equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} />
                </section>

            </main>


        </>

    );

}

export default AccomodationPage;