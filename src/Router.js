import { createBrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import AccomodationPage from './pages/AccomodationPage';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';
import Template from "./pages/Template";


const Router = createBrowserRouter([
    {
        path: "",
        element: <Template />, 
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/a-propos",
                element: <AboutPage />
            },
            {
                path: "/fiche-logement/:idLogement",
                element: <AccomodationPage />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ],
    },            


]);




export default Router;