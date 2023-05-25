import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <Header />
            <main className="not-found">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" class="back-home">Retourner sur la page d’accueil</Link>
            </main>
        </>
    );
}

export default NotFound;