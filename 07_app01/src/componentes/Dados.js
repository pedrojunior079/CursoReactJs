import React from 'react'

export default function Dados(props){
    let n1=10
    let n2=20
    return(
        <section>
           <p>Canal:{props.canal()}</p>
           <p>Youtube:{props.youtube}</p>
           <p>Cursos:{props.cursos}</p> 
           <p>{'A soma de ' + n1  + ' com ' + n2 + ' é igual ' + props.somar(n1,n2)}</p>
        </section>
    )
}