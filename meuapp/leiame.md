------Script da aula 12-----
------Condicional.js-------
import {useState} from 'react'

function Condicional(){

   const [email, setEmail] = useState()
   const [userEmail, setUserEmail] = useState()


   function enviarEmail(e){
     e.preventDefault()
     setUserEmail(email)
     console.log(userEmail)
   }

   function limparEmail(){
    setUserEmail('')
  }

   return(
       <div>
          <h2>Cadastre seu email</h2>
          <form>
              <input 
                type="email" 
                placeholder='Digite o seu e-mail...'
                onChange={(e)=>setEmail(e.target.value)}      
              />
              <button type='submit' onClick={enviarEmail}>Enviar-email</button>
              {userEmail && (
                <div>
                  <p>o e-mail do usuario é: {userEmail}</p>
                  <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
              )}
          </form>
          
       </div>
   ) 
}

export default Condicional



-----App.js----
import {useState} from 'react'

function Condicional(){

   const [email, setEmail] = useState()
   const [userEmail, setUserEmail] = useState()


   function enviarEmail(e){
     e.preventDefault()
     setUserEmail(email)
     console.log(userEmail)
   }

   function limparEmail(){
    setUserEmail('')
  }

   return(
       <div>
          <h2>Cadastre seu email</h2>
          <form>
              <input 
                type="email" 
                placeholder='Digite o seu e-mail...'
                onChange={(e)=>setEmail(e.target.value)}      
              />
              <button type='submit' onClick={enviarEmail}>Enviar-email</button>
              {userEmail && (
                <div>
                  <p>o e-mail do usuario é: {userEmail}</p>
                  <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
              )}
          </form>
          
       </div>
   ) 
}

export default Condicional


--------Aula 13----------
--------App.js----------
import './App.css';
import OutraLista from './components/OutraLista';

function App() {
 
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      
    </div>
  );
}

export default App;


-----OutraLista.js-----
function OutraLista({itens}){
   return (
       <div>
           <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
               itens.map((item, index) => <p key={index}>{item}</p>)
            ) : (
              <p>Não ha itens na lista</p>
            )} 
       </div>
   )
}

export default OutraLista

extensão bracket pair colorizer



-----------Aula 14------------
function Saudacao({nome}){

   function gerarSaudacao(algumNome){
      return 'Olá, ${algumNome}, tudo bem?'  
   }  

   return (
       <div>
           {nome && <p>{gerarSaudacao(nome)}</p>}
       </div>
   )
}

export default Saudacao

--------------SeuNome.js----------
function SeuNome({setNome}){
   return (
       <div>
          <p>digite seu nome:</p>
          <input 
            type="text" 
            placeholder="Qual seu nome?" 
            onChange={(e)=>setNome(e.target.value)}
          />
       </div>
   )
}

export default SeuNome


------------App.js---------------
import {useState} from 'react'
import './App.css';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';


function App() {
 
  const [nome, setNome] = useState()

  return (
    <div className="App">
      
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;


----------Aula 15-----------
----------App.js------------
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>                            
            <Route path="/empresa" element={<Empresa/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;


-------------Home.js--------------
function Home(){
    return (
    
        <div>
            <h1>Home</h1>
            <p>Conteudo da pagina</p>
        </div>

    )
}

export default Home


-------Empresa--------------
function Empresa(){
    return(
       <div>
           <h1>Empresa</h1>
           <p>bem vindo a pagina da empresa</p>
       </div>
    );
}
export default Empresa;


--------Contato.js---------
function Contato(){
    return(
       <div>
           <h1>Contato</h1>
           <p>conteudo de contatos</p>
       </div>
    );
}
export default Contato;



-----------Navbar.js---------
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(){
    return(
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
         </li>
       </ul>
    );
}

export default Navbar;




-------Navbar.module.css---------
.list{
    display: flex;
    list-style: none;
}

.item{
    margin-right: 1em;
}








