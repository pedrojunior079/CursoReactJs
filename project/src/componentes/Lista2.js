import React from 'react'


export default function Lista2(){
	
	const tech=[
      {categoria: "Framework", linguagemProg: "NodeJs"},
      {categoria: "framework", linguagemProg: "VueJs"},
      {categoria: "Framework", linguagemProg: "ReactJs"},
      {categoria: "Lingguagem de Programação", linguagemProg: "C++"},
      {categoria: "Linguagem de Programação", linguagemProg: "Java"},
      {categoria: "Linguagem de Programação", linguagemProg: "Python"},	
	
	];
	const listaTech=tech.map(
      (tech,i)=>	
	      <li key={i}>{i} - {tech.categotia} - {tech.linguagemProg}</li>
	)
  return(
    <>
     <ul>{listaTech}</ul>  
    </>
  ); 
}