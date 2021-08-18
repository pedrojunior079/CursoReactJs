import React from 'react'
import Dados from './Dados'


export default function Corpo(){
    const cnl=()=>{
        return 'CFB Cursos' 
    } 
    const yt = 'youtube.com/cfbcursos'
    const crs = 'React.js'
    const somar=(v1,v2)=>{
        return v1+v2
    } 

    return(
        <section>
            <h2>Curso de react</h2>
            <p>No canal CFB Cursos</p>
            <p>Se inscreve e ative o sininho</p>
            <Dados 
               canal={cnl} 
               youtube={yt} 
               curso={crs}
               somar={somar}
            />
        </section>
    )
}