import React from 'react'
import Dados from './Dados'

export default function Corpo() {
    const cnl = "CFB Cursos"
    const yt = "youtube.com/cfbcursos"
    const crs = "ReactJs"	
	
    return(
    
     <section>
      <h2>Curso de ReacJs</h2>
      <p>No canal CFB Cursos</p>
      <p>Se inscreve e ative o sininho</p>
      <Dados
         canal={cnl}      
         youtube={yt}
         curso={crs}
      />
     </section>    
    
    );
 }
 
 