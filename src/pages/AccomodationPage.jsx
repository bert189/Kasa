import React, { useEffect, useState } from "react";
import { fetchAllAccomodations } from "../api/api";
import { useParams, useNavigate } from 'react-router-dom';

import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";



function AccomodationPage() {

    const currentLocation = useParams();
    const idAccomodation = currentLocation.idLogement;
    const navigate = useNavigate();

    const [accomodation, setAccomodation] = useState();
    
    useEffect(() => {
        async function load() {
            try {
                const allAccomodations = await fetchAllAccomodations();
                const acc = allAccomodations.find((item) => item.id === idAccomodation);
                if (acc) {
                    setAccomodation(acc);
                }
                else {
                    navigate("/logement-introuvable");
                }
            }
            catch(err) {
                // Gérez les erreurs ici
            }
        }
        load();
    }, )



    if(accomodation) {
        const {pictures, title, location, host, tags, rating, description, equipments} = accomodation;
        const fullName = host.name;
        const [firstName, lastName] = fullName.split(" ");

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
    // else {
    //     return (
    //         <LoadingSpinner />
    //     )
    // }
}

export default AccomodationPage;