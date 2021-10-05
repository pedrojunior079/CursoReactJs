import React,{useEffect, useState} from 'react'


export default function AppUseEffect(){
  const [contagem,setContagem]=useState(0)
  useEffect(
    ()=>{
      console.log("Pagina carregada")
      document.titlte='Contagem:'+contagem
    }
  )
               
   return(
     <>
       <p>Contagem:{contagem}</p>     
       <button onClick={()=>setContagem(contagem+1)}>Contar</button>
     </>
  );
}