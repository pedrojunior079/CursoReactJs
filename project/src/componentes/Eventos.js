import React,{useState} from 'react'
import Led from '../componentes/Led'

export default function Eventos(){
    	
	 const [ligado,setLigado]=useState(false)
	 const cancelar=(obj)=>{
       return obj.preventDefault()	 
	 }
	  
    return(
        <>
          <Led ligado={ligado} setLigado={setLigado}/><br/>
          <a href="https://pt-br.reactjs.org/" target="_blank" onClick={(e)=>cancelar(e)}>
          React.js Uma biblioteca Javascript para criar interfaces de usuários</a>         
        </>
    ); 
}