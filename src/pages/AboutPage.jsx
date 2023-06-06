import React, {useState, useEffect} from "react";

import { fetchAbouts } from "../api/api";

import valley from "./../assets/valley.png";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";


function AboutPage() {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        fetchAbouts()
            .then(result => {
                setAbouts(result)
            })
            .catch(err => {
                // Gérez les erreurs ici
            });
    }, [])

    const alt = "image décorative d'une vallée montagneuse";

    return (
        <>
            <Banner image={valley} titleFirst=" " titleSecond=" " alt={alt} />
            <main className="abouts">
                {abouts.map((about, index) => (
                    <Dropdown key={index} title={about.title} content={about.content} />
                ))}
            </main>           
        </>
    );
}

export default AboutPage;