import React from "react";
import logoPink from "../assets/logo-pink.png";
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";


function Header() {

    const links = [
        { text: 'Accueil', url: '/' },
        { text: 'À Propos', url: '/a-propos' },
    ];

    return (
        <div className="header container">
            <Link to="/"><img className="header__logo" src={logoPink} alt="logo kasa"/></Link>
            <Nav links={links} />
        </div>        
    );
}

export default Header;