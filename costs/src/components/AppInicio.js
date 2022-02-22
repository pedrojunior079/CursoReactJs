import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import Container from "./layout/Container";
import Navbar from "./layout/Navbar";



function AppInicio() {
  return (
    <Router>
         
         <Navbar/>
                       
         <Container customClass="minHeight"> 
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Projects" element={<Projects/>}/>
             <Route path="/Company" element={<Company/>}/>
             <Route path="/Contact" element={<Contact/>}/>
             <Route path="/NewProject" element={<NewProject/>}/>
          </Routes>
         </Container>
    
    </Router>
  );
}

export default AppInicio;