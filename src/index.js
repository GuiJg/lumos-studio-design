import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

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
