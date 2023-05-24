import React from "react";

import coast from "./../assets/coast.png";

import Banner from "../components/Banner";
import Header from "../components/Header";
import AllAccomodations from "../components/AllAccomodations";
// import Footer from "../components/Footer";


function Home() {

    const title = "Chez vous, partout et ailleurs"

    return (
        <>
            <Header />
            <Banner image={coast} title={title}/>
            <AllAccomodations />
            {/* <Footer />        */}
        </>
    );
}

export default Home;