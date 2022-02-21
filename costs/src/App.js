import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";



function App() {
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

export default App;
