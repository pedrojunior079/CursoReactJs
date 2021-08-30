import React from 'react'
import SomarDados from './SomarDados'

export default function Somar() {
    const somar=(v1,v2)=>{
        return v1+v2    
    }
	
    return(
    
     <section>
      <SomarDados
         somar={somar}
      />
     </section>    
    
    );
 }
 