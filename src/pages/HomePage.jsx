import React from "react";

import coast from "./../assets/coast.png";

import Banner from "../components/Banner";
import AllAccomodations from "../components/AllAccomodations";
// import Footer from "../components/Footer";


function Home() {

    const titleFirst = "Chez vous,";
    const titleSecond = "partout et ailleurs";
    const alt = "cote sauvage";

    return (
        <>
            <Banner image={coast} titleFirst={titleFirst} titleSecond={titleSecond} alt={alt}/>
            <AllAccomodations />
        </>
    );
}

export default Home;