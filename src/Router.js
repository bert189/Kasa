import { createBrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import AccomodationPage from './pages/AccomodationPage';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />, 
        errorElement: <NotFound />,
        // children: [ // /!\ nested routes children ne fonctionnent pas...
        //     {
        //         path: "/a-propos",
        //         element: <About />
        //     },
        //     {
        //         path: "/fiche-logement/:idLogement",
        //         element: <Accomodation />
        //     }
        // ],
    },            
    {
        path: "/a-propos",
        element: <AboutPage />
    },
    {
        path: "/fiche-logement/:idLogement",
        element: <AccomodationPage />,
    }

]);




export default Router;