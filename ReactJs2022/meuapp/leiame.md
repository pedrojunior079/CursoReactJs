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






