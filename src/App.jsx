
import { Outlet } from 'react-router-dom'
import './App.css'
import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'

function App() {
   return( <>
   
   <Navbar/>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   <h3>hellow Atif</h3>
   
   <Outlet></Outlet>

   <FooterSection/>

   
   </>
   )  
  
}

export default App


