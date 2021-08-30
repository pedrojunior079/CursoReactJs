import React,{useState} from 'react'
import '../App.css'
import Numero from '../componentes/Numero'


export default function State(){
	
	const [num,setNum]=useState(10)
	
	let n1=50
	
	const n100=()=>{
     n1=100  		
	  console.log(n1);
	}
	
	return(
     <>	    
	   <p>Valor do state num em App: {num}</p>
	   <Numero num={num} setNum={setNum}/>       
	  </>
   );
}