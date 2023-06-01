import React from "react";

import coast from "./../assets/coast.png";

import Banner from "../components/Banner";
import Header from "../components/Header";
import AllAccomodations from "../components/AllAccomodations";
// import Footer from "../components/Footer";


function Home() {

    const titleFirst = "Chez vous,";
    const titleSecond = "partout et ailleurs";
    const alt = "cote sauvage";

    return (
        <>
            <Header />
            <Banner image={coast} titleFirst={titleFirst} titleSecond={titleSecond} alt={alt}/>
            <AllAccomodations />
            {/* <Footer />        */}
        </>
    );
}

export default Home;