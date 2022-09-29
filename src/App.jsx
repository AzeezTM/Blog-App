

import './App.css'
import Signup from './components/signup/Signup';
import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SinglePosts from './components/Single/SinglePosts';
import Comments from './components/Comments/Comments';
import Profile from './components/profile/profile';
import Adminheader from './components/admin/Adminheader'




function App() {
  
  

  return (
   <main>
    {/* <Topbar /> */}
{/* <Header/> */}
    {/* <Profile/> */}
     {/* <Signup/> */}
     <Adminheader />

     <Home/>
     {/* <SinglePosts/> */}
     {/* /post/6332dd9d2ad70efb50c096c6"  */}
   
        <Footer/>

   </main>
  )
}

export default App
