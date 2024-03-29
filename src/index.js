import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home';

//pages
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Privacy from './components/pages/privacy';

//projects
    //website
        import Agil from './components/pages/projects/websites/Agil';
        import Coffee from './components/pages/projects/websites/Coffee';
        import Vandelson from './components/pages/projects/websites/Vandelson';
    //social media
        import SushiSocial from './components/pages/projects/social media/SushiSocial';
        import CoffeeSocial from './components/pages/projects/social media/CoffeeSocial';
        import AdvocaciaSocial from './components/pages/projects/social media/AdvocaciaSocial';

//styles
import './style.css';
import './responsive.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/sobre",
                element: <About />,
            },

            {
                path: "/servicos",
                element: <Services />,
            },

            {
                path: "/portfolio",
                element: <Portfolio />,
            },

            {
                path: "/privacidade",
                element: <Privacy />,
            },

            {
                path: "/portfolio/agil-gestao-contabil",
                element: <Agil/>,
            },

            {
                path: "/portfolio/coffee-cube",
                element: <Coffee/>,
            },

            {
                path: "/portfolio/vandelson-junior-advogados",
                element: <Vandelson/>,
            },
            
            {
                path: "/portfolio/sushi-social-media",
                element: <SushiSocial/>,
            },

            {
                path: "/portfolio/cafe-social-media",
                element: <CoffeeSocial/>,
            },

            {
                path: "/portfolio/advocacia-social-media",
                element: <AdvocaciaSocial/>,
            },
        ]
    }
])

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
