import React from "react";

import valley from "./../assets/valley.png"

import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return (
        <>
        <Header />
        <Banner image={valley} title="About"/>
        <Footer />
        
        </>
    );
}

export default About;