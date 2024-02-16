import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services'; 
import Portfolio from './pages/portfolio';

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
