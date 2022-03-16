import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layouts/Container";

function AppHome() {
    return (
    
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Company">Empresa</Link>
          <Link to="/Contact">Contato</Link>
          <Link to="/NewProject">Novo Projeto</Link>
        </div>
        <Routes>
          <Container> 
            <Route path="/" element={<Home/>}></Route> 
            <Route path="/company" element={<Company/>}></Route> 
            <Route path="/contact" element={<Contact/>}></Route> 
            <Route path="/newproject" element={<NewProject/>}></Route>
          </Container> 
        </Routes>
      </Router>
    
    );
  }
  
  export default AppHome;