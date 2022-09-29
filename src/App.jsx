

import './App.css'
import Signup from './components/signup/Signup';
import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoginSignupContainer from './components/LoginSignupContainer/LoginSignupContainer';
import SinglePosts from './components/Single/SinglePosts';
import Comments from './components/Comments/Comments';
import Profile from './components/profile/profile';
import Adminheader from './components/admin/Adminheader'




function App() {
  
  

  return (

   <main>
    <NavigationBar />
  <LoginSignupContainer />
    {/* <Topbar /> */}
{/* <Header/> */}
    {/* <Profile/> */}
     {/* <Signup/> */}

   </main>
  )
}

export default App
