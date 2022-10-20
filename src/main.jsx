import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Route,Routes
} from "react-router-dom";


import App from './App'

import './index.css'
import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Profile from './components/profile/profile';
import SinglePosts from './components/Single/SinglePosts';
import AddPost from './components/admin/Admin-post/AddPost';
// import AddTopic from './components/admin/Admin-Topic/AddTop';
import AddTopic from './components/admin/Admin-Topic/AddTopic';
import LoginSignupContainer from './components/signup/LoginSignupContainer/LoginSignupContainer';
import Adminheader from './components/admin/Adminheader';

import { ContextProvider } from './Context/Contex';
import { Suspense } from 'react';

// import ManageUser from './components/admin/Admin-User/ManageUser';
import ManageTopic from './components/admin/Admin-Topic/ManageTopic';


const user = false;


const router = createBrowserRouter([
  {
    path: "/", element: <App/>
  
   
  },

  {
    path: "signup",  element: user ? <Home/> : <LoginSignupContainer/>
   
  },
  {
    path: "/",  element: <Home/>
   
  },
  {
    path: "profile", element: user ?  <Profile/> : <LoginSignupContainer/>
   
  },

  {
    path: "post/:id", element: <SinglePosts/>
   
  },
  {
    path:"/addPost", element: user ?  <Adminheader /> :  <LoginSignupContainer/>
   
  },
  {
    path:"/manageuser", element: <Profile />
  },
  {
    path:"/managetopic", element: <ManageTopic />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ContextProvider>
      <Suspense>
      <RouterProvider router={router} />
      </Suspense>
    </ContextProvider>
  
  </React.StrictMode>
  
)
