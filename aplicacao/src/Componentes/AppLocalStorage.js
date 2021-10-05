import React,{useState} from "react";

export default function AppLocalStorage(){
    
    const [nome,setNome]=useState()
    const armazenar=(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }
    const consultar=(chave)=>{
        alert(localStorage.getItem(chave))
    }
    const apagar=(chave)=>{
        localStorage.removeItem(chave)
    }
    return(
        <>
         <label>Digite um nome</label><br/>
         <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
         <button onClick={()=>armazenar('ls_nome',nome)}>Gravar Nome</button>
         <button onClick={()=>consultar('ls_nome')}>Ver Nome</button>
         <button onClick={()=>apagar('ls_nome')}>Remover Nome</button>
        </>
    );
}