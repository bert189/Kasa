import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <main className="not-found">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className="back-home">Retourner sur la page d’accueil</Link>
            </main>
        </>
    );
}

export default NotFound;