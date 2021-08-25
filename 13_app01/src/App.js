import React from 'react'
import './App.css'

export default function App(){

   const tech=[
      {categoria: "Framework", linguagemProg: "NodeJs"},
      {categoria: "Framework", linguagemProg: "VueJs"},
      {categoria: "Framework", linguagemProg: "ReactJs"},
      {categoria: "Linguagem de Programação", linguagemProg: "C++"},
      {categoria: "Linguagem de Programação", linguagemProg: "Java"},
      {categoria: "Linguagem de Programação", linguagemProg: "Python"}
   ];
   const listaTech=tech.map(
      (tech,i)=>
         <li key={i}>{i} - {tech.categoria} - {tech.linguagemProg}</li>
      
   ) 
      
   return(
     <>
       <ul>{listaTech}</ul>    
     </>
  );
}
