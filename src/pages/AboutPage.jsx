import React, {useState, useEffect} from "react";

import { fetchAbouts } from "../api/api";

import valley from "./../assets/valley.png";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
// import Footer from "../components/Footer";


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

    return (
        <>
            <Header />
            <Banner image={valley} title=" "/>
            <main className="abouts">
                {abouts.map((about, index) => (
                    <Dropdown key={index} title={about.title} text={about.text} />
                ))}
            </main>
           
            
            {/* <Footer /> */}            
        </>
    );
}

export default AboutPage;