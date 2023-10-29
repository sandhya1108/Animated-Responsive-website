import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';
function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}
export default App;