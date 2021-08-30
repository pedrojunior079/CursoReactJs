import React from 'react'

//uso de componentes com props da aula 06

export default function Dados(props){
    return(
      <section>
          <p>Canal:{props.canal()}</p>
          <p>Youtube:{props.youtube}</p>
          <p>Cursos:{props.cursos}</p>;
      </section>    
    ); 
}
