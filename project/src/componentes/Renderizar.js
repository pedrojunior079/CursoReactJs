import React,{useState} from 'react'
import '../App.css'

export default function Renderizar(){

   const [cor, setCor]=useState(1)
   const vermelho={color:"#f00"}
   const verde={color:"0f0"}
   const azul={color:"#00f"}
   
   const retCor=(c)=>{
      if(c == 1){
        return vermelho      
      }else if (c ==2) {
        return verde
      }else {
      	return azul
      }	  	   
   }
   
   const mudaCor=()=>{
      setCor(cor+1)
      if(cor > 2){
         setCor(1)      
      }
   }
   
   //setInterval(mudaCor,1000)   
   
   return(
     <> 
      <h1 style={retCor(cor)}>Curso de React.js</h1>
      <button onClick={()=>mudaCor()}>Muda Cor</button> 
     </>
   );
}