import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


function Template() {
    return (
        <>
            <div className="container">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>  
    )
}

export default Template;