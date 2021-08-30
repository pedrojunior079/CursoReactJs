import React,{useState} from 'react'

export default function Formulario2(){

  const [nome,setNome]=useState('')
  const [curso,setCurso]=useState('React')
  
  return(
    <>
     <label>Digite seu nome</label>
     <input type="text" name="fnome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
     <p>Nome digitado: {nome}</p>
     <label>Selecione um curso</label>
     <select value={curso} onChange={(e)=>setCurso(e.target.value)}>
        <option value="React">ReactJs</option>
        <option value="Nodejs">Node.js</option>
        <option value="Vuejs">VueJs</option>
        <option value="PHP">PHP</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
     </select>
     <p>Curso Selecionado: {curso}:</p>
    </>
  );
}