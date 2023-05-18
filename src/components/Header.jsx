import React from "react";
import logoPink from "../assets/logo-pink.png"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <img src={logoPink} alt="logo kasa"></img>
            <nav>
                <NavLink to="/" end>Accueil</NavLink>
                <NavLink to="/a-propos" end>A Propos</NavLink>
            </nav>
        </div>
        
    );
}

export default Header;