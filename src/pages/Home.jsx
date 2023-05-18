import React from "react";

import coast from "./../assets/coast.png";

import Banner from "../components/Banner";
import Header from "../components/Header";
import AllAccomodations from "../components/AllAccomodations";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
        <Header />
        <Banner image={coast} title={"Home"}/>
        <AllAccomodations />
        <Footer />        
        </>
    );
}

export default Home;