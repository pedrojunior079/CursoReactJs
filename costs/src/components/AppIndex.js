import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";

import Container from "./layout/Container";

function AppIndex(){
   return(
       <Router>
          <div>
              <Link to="/">Home</Link>
              <Link to="/company">Empresa</Link>
              <Link to="/contact">Contato</Link>
              <Link to="/newproject">Novo Projeto</Link>
          </div>
          
          <Container customClass="minHeight">  
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/company" element={<Company/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/newproject" element={<NewProject/>}/>
            </Routes>
          </Container>
          <p>Footer</p> 
       </Router>
       
   );
}

export default AppIndex;