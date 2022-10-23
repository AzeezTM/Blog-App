import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
// import { Suspense } from 'react'

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
import { Context, ContextProvider } from './Context/Contex';
// import Post from './components/Post/Post';
const Post = React.lazy(() => import("./components/Post/Post"))



// const {user} = useContext(Context)
// const user = false


const router = createBrowserRouter([
  
  {
    path: "/", element: <App/>,
    children: [
  {
    path: "signup",  element: <LoginSignupContainer/>
   
  },
  {
    path: "/",  element: <Home/>
   
  },
  {
    path: "profile", element: <Profile/>
   
  },

  {
    path: "post/:id", element: <SinglePosts/>
   
  },
  {path: "addPost",element:<Adminheader/>

  },
  // {
  //   path: "/post",
  //   element: <Post />,
  //   children:[
  //     {path:"",element: <><h1>DASH BOARD PAGE</h1></>},
  //     {path:"tech",element: <><h1 className='w-25 bg-danger'>TEAM MEMBERS PAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet, labore fugit perferendis libero cupiditate nemo ipsum quisquam pariatur nostrum quod iure iste, eos ducimus natus odio voluptatum eaque autem!</h1></>},
  //     {path:"sport",element: <><h1>BILLINGS PAGE</h1></>},
  //     {path:"entertainment",element: <><h1 className='bg-danger'>SETTINGS PAGE</h1> </>},
  //     {path:"nature",element: <><div>PROJECT PAGE</div></>},
  //   ]
  // }

]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ContextProvider>
    {/* <Suspense>  */}
      
      <RouterProvider router={router} />
      {/* </Suspense> */}
    </ContextProvider>
  
  </React.StrictMode>
  
)
