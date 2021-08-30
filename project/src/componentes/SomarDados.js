import React from 'react'

//uso de componentes com props da aula 06

export default function SomarDados(props){
	let n1=10
	let n2=20
    return(
      <section>
          <p>"A soma de " + n1 + " com " + n2 + " é igual " + props.somar(n1+n2)}</p>
      </section>    
    ); 
}
