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

Aula 19 - Footer e Navbar: a navbar é onde vamos exibir os principais links da aplicação
e o footer exibirá as redes sociais e o nome do sistema.

Aula 20 - Criando a home - crianção dos componentes visuais como o banner principal

Aula 21 - criado a classe Form e ProjectForm

Aula 22 - Componentização de formularios - tecnica que permite a reutilização de componentes entre paginas

Aula 23 - Conectando com API pelo React - iremos conectar nosso projeto React com a API, isso vai servir 
para fazer as manipulações de dados persistirem no banco.

npm run backend