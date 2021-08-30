import React from 'react'
import '../App.css'


export default function Pagina(){
	const textoDestaque={
     color:"#00f",
     fontSize:"3em"	
	}
		
	return(
     <>	    
	    <section className="caixa">
        <h1 style={{color:"#f00", fontSize:"3em"}}>CFB Cursos</h1>
	     <h2 style={textoDestaque}>Curso de React</h2>
	     <p>Se inscreva em nosso canal e nos siga no instagram</p>
	    </section>
	  
	  
	  </>
   );
}