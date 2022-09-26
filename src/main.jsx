import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import App from './App'

import './index.css'
import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Profile from './components/profile/profile';

const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
  
   
  },

  {
    path: "/signup", element: <Signup/>
   
  },
  {
    path: "/",  element: <Home/>
   
  },
  {
    path: "/profile", element:   <Profile/>
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
