import React from "react";
import logoWhite from "../assets/logo-white.png";

function Footer() {
    return (
        <footer className="footer">
            <img src={logoWhite} alt="logo kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
        
    );
}

export default Footer;