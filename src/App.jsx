
import './App.css'
import Signup from './components/signup/Signup';
import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  

  return (
   <main>
     
    <Topbar />
     {/* <Signup/> */}
     <Home/>

     {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tickets/:id' element={<Tickets />} />
          <Route path='contact' element={<Contact />} />
          <Route path='seat/:id' element={<Seat />} />
          <Route path='paystack' element={<Paystack />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Routes> */}
        <Footer/>
       
   </main>
  )
}

export default App
