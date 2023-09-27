import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Donations from './components/Donations';
import Statistics from './components/Statistics';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path:"/donations",
        element: <Donations></Donations>,
        loader: () => fetch("../public/data.json")
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader: () => fetch("../public/data.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
