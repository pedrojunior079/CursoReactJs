import React from 'react'
import Logo from './componentes/img/logo.png'


export default function App(){
  const canal=()=>{
    return('CFB Cursos')
  }
  function curso(){
    return 'Curso de React'
  }
    
  return(
     <>
     <header>
        <p>{'Canal: ' + canal()}</p>
        <p>{'Curso: ' + curso()}</p>
     </header>
     <section>
        <img src={Logo}/>
        <img src='/img/php.png'/> 
     </section>
     </>
  )
}

 