import React,{useState} from 'react'
import './App.css'
import Nota from './componentes/Nota'
import Resultado from './componentes/Resultado'

export default function App(){
   const [notas,setNotas]=useState({"nota1":"0","nota2":"0","nota3":"0","nota4":"0"})
   const handleSetNotas=(e)=>{
    if(e.target.getAttribute('nota1')=='nota2' && 'nota3' && 'nota4'){
      setNota({"nota1":e.target.value,"curso":form.curso,"ano":form.ano})
    }else if(e.target.getAttribute('name')=='fcurso'){
     setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
    }else if(e.target.getAttribute('name')=='fano'){
     setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value}) 
    }
   }
    
               
   return(
     <>
       <Nota num={1} nota={notas.nota1} setNota={handleSetNotas}/>
       <Nota num={2} nota={notas.nota2} setNota={handleSetNotas}/>
       <Nota num={3} nota={notas.nota3} setNota={handleSetNotas}/>
       <Nota num={4} nota={notas.nota4} setNota={handleSetNotas}/>
       <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(motas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
     </>
  );
}
