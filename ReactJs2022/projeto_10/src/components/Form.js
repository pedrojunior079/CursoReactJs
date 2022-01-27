import {useState} from 'react'

function Form(){

   function cadastrarUsuario(e){
       e.preventDefault()
       console.log('Cadastrou o usuário!')
   }
   
   const [name, setName] = useState()

   return(
       <div>
           <h1>Meu cadastro:</h1>
           <form onSubmit={cadastrarUsuario}>
               <div>
                   <input type="text" placeholder="Digite seu nome"/>
               </div>
               <div>
                   <input type="submit" value="Cadastrar"/>
               </div>
           </form>
       </div>
   )
}

export default Form