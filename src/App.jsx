

import './App.css'

import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SinglePosts from './components/Single/SinglePosts';
import Comments from './components/Comments/Comments';
import Profile from './components/profile/profile';
import Adminheader from './components/admin/Adminheader'
import AddPost from './components/admin/Admin-post/AddPost';
import LoginSignupContainer from './components/signup/LoginSignupContainer/LoginSignupContainer';
import Login from './components/signup/Login/Login';
import Signup from './components/signup/signup/Signup';
import { Routes, Route } from 'react-router';
import Post from './components/Post/Post';
import Posts from './components/Posts/Posts';

function App() {



  return (

   <main>
    {/* <Topbar /> */}
{/* <Header/> */}
    {/* <Profile/> */}
     {/* <Signup/> */}
     {/* <Adminheader /> */}
{/* <AddPost/> */}
     <Home/>
     {/* <LoginSignupContainer /> */}
     {/* <Login/> */}
     {/* <Signup/> */}
     {/* <SinglePosts/> */}
     {/* <Post/> */}
     <Posts/>
     {/* /post/6332dd9d2ad70efb50c096c6"  */}


     {/* <Routes>
  <Route path="/" element={<Home />}>
    <Route
      path="profile"
      element={<Profile/>}
    />
    <Route path="signup" element={<LoginSignupContainer />} />
    <Route path="addPost" element={<Adminheader />} />
  </Route>
  <Route path="post/:id" element={<SinglePosts />} />
</Routes> */}

{/* {
    path: "signup",  element: <LoginSignupContainer/>
   
  },
  {
    path: "/",  element: <Home/>
   
  },
  {
    path: "profile", element:   <Profile/>
   
  },

  {
    path: "post/:id", element: <SinglePosts/>
   
  },
  {
    path:"/addPost", element: <Adminheader />
  },
   {
    path:"/addTopic", element: <AddTopic />
  } */}
   
        <Footer/>

   </main>
  )
}

export default App
