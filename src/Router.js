import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Accomodation from './pages/AccomodationPage';
import NotFound from './pages/NotFound';
import About from './pages/About';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />, 
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
        element: <About />
    },
    {
        path: "/fiche-logement/:idLogement",
        element: <Accomodation />
    }


]);




export default Router;