Criação do projeto Costs do Curso de react do canal Hora de Codar da Aula 17 e instalação das bibliotecas:

npm install react-router@6 react-router-dom@6
npm install json server react-icons uuid

e instalação das fontes Open Sans:
https://fonts.google.com/specimen/Open+Sans?query=open

Aula 18 - Estruturando o projeto

function App() {
  return (
    <BrowserRouter> 
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Company">Empresa</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </ul>

        <Container>
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Company" element={<Company/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/NewProject" element={<NewProject/>}/>    
          </Routes>
        </Container>

      <p>Footer</p>

    </BrowserRouter>
  );
}

  <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/newproject' element={<NewProject/} />
      </Routes>
      <footer>Footer</footer>
    </Router