import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services'; 
import Portfolio from './components/pages/Portfolio';
import Privacy from './components/pages/privacy';

import './style.css';
import './responsive.css';

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
                path: "/privacidade",
                element: <Privacy/>,
            }
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
