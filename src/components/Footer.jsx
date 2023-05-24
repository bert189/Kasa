import React from "react";
import logoWhite from "../assets/logo-white.png";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logoWhite} alt="logo kasa"></img>
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
        
    );
}

export default Footer;