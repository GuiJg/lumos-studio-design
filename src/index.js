import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services'; 
import Portfolio from './components/pages/Portfolio';
import Websites from './components/pages/Websites';


const router = createBrowserRouter([ 
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>, 
            }, 

            {
                path: "/sobre",
                element: <About/>,
            },

            {
                path: "/servicos",
                element: <Services/>,
            },

            {
                path: "/portfolio",
                element: <Portfolio/>,
            },

            {
                path: "/websites",
                element: <Websites/>, 
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
