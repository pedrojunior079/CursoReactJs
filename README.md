# CursoReactJs
 Curso React.js onde estou aprendendo a mexer neste framework jacascript

 Aula 02 foi instalação do mode.js e do ambiente de desenvolvimento no PC.
 O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.


Aula 03 - Entendendo a estrutura básica de um App React -  vamos aprender sobre a estrutura básica de um App React e o código básico (esqueleto) de um componente em React.

Aula 04 - Expressões em JSX. Inserção de imagens nos App. Constantes e Variáveis - vamos aprender sobre: Expressões em JSX, como inserir o Javascript no JSX. Inserção de imagens no App React, como inserir imagens que estão na pasta public e na pasta src. Constantes e Variáveis em React, como trabalhar com constantes e variáveis simples nos Apps React.

Aula 05 - como criar componentes em React -  vamos aprender como criar nossos próprios componentes.

Aula 06 - Enviar propriedades para os componentes com PROPS - vamos aprender como enviar propriedades e funções para os componentes com PROPS.

Aula 07 - Enviar funções para os componentes - vamos aprender como enviar funções para os componentes.

Aula 08 - Usando CSS em React, formas de usar CSS em React -  vamos aprender as várias formas de como usar CSS em páginas React.

Aula 09 - Como funciona a renderização de componentes em React - vamos aprender mais sobre como funciona a renderização de componentes.

Aula 10 - O que é State e como usar State em React - vamos aprender o que é State e como usar State em React. Vamos aprender o primeiro hook no curso de React.

Aula 11 - Eventos em React - vamos aprender como trabalhar com eventos, além de passar funções para eventos de componentes.

Aula 12 - Como usar o recurso de Rederinzalçao condicional em React - vamos aprender como usar o recurso de Renderização condicional. Com este recurso podemos indicar se um componentes será mostrado/renderizado ou não, além de outras possibilidades.

import React,{useState} from 'react'
import './App.css'

export default function App(){

   const [log,setLog]=useState(false)

   const msglogin=()=>{
      return "Usuário Logado"
   }

   const msglogoff=()=>{
      return "Favor Logar"
   }
  
   const cumprimento=()=>{
      const hora=new Date().getHours()
      if(hora >=0 && hora < 13){
         return <p>Bom dia</p>
      }else if(hora >= 13 && hora < 18){
         return <p>Boa tarde</p>
      }else{
         return <p>Boa noite</p>
      }
   }

   return(
     <>
         {cumprimento()}
         <p>{log?msglogin():msglogoff()}</p>
         <button onClick={()=>setLog(!log)}>{log?"Logoff":"Login"}</button>   
     </>
  );
}

Aula 13 - Trabalhando com LISTA em React usando a função MAP - vamos aprender como trabalhar com listas usando a função MAP de Javascript.Com este recurso podemos indicar se um componentes será mostrado/renderizado ou não, além de outras possibilidades.

import React from 'react'
import './App.css'

export default function App(){

   const carros=["HRV","Golf","Focus","Cruze","Argo"]
   const listaCarros=carros.map(
      (c,i)=>
         <li key={i}>{i} - {c}</li>
      
   ) 
   
   
   return(
     <>
       <ul>{listaCarros}</ul>    
     </>
  );
}


