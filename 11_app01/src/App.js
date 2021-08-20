import React,{useState} from 'react'
import Led from './componentes/Led'
import './App.css'

export default function App(){

  const [ligado,setLigado]=useState(false)

  const cancelar=(obj)=>{
     return obj.preventDefault()
  }   
    

  return(
     <>
        <Led ligado={ligado} setLigado={setLigado}/>
        <a href="https://pt-br.reactjs.org/" target="_blank" onClick={(e)=>cancelar(e)}>
          React.js Uma biblioteca Javacript para criar interfaces de usuários</a>      
     </>
  );
}
