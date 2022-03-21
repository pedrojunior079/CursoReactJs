Curso de React do canal no Youtube Matheus Battisti - Hora de Codar

Aula 17 foi criação do projeto atraves do comando: npx create-react-app costs
e instalação de pacotes json-server, react-icons, uuid e react-router-dom

Aula 18 - Estruturando o projeto - nesta aula ainda esta sendo usada a versão 5 do
react-router-dom que usa o Switch para a criação de rotas, mas essa foi a estrutura que usei
de rotas na nova versão do react-router-dom:

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

