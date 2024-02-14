import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Sections/Pages/home'; 
import AboutPage from './Sections/Pages/about'; 
 
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
                element: <AboutPage />,
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
