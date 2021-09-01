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

Aula 12 - Como usar o recurso de Renderizaçao condicional em React - vamos aprender como usar o recurso de Renderização condicional. Com este recurso podemos indicar se um componentes será mostrado/renderizado ou não, além de outras possibilidades.

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

import React from 'react'
import './App.css'

export default function App(){

   const carros=[
      {categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
      {categoria: "Esporte", preco: "120000.00", modelo: "Camaro"},
      {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
      {categoria: "SUV", preco: "83000.00", modelo: "T-Cross"},
      {categoria: "Utilitario", preco: "120000.00", modelo: "Hillux"},
      {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}
   ];
   const listaCarros=carros.map(
      (c,i)=>
         <li key={i}>{i} - {c.categoria} - R$ {c.preco} - {c.modelo}</li>
      
   ) 
      
   return(
     <>
       <ul>{listaCarros}</ul>    
     </>
  );
}

Aula 14 - Manipulando elementos de formulário com React - vamos aprender como trabalhar com componentes de formulário em React, como obter o valor dos componentes de formulário, input text e os demais componentes.

Com este recurso podemos indicar se um componentes será mostrado/renderizado ou não, além de outras possibilidades.

import React,{useState} from 'react'
import './App.css'

export default function App(){

   const [nome,setNome]=useState('')
   const handleChageNome=(e)=>{
      setNome(e.target.value)
   }
      
   return(
     <>
       <label>Digite seu Nome</label>
       <input 
         type="text" 
         name="fnome"
         value={nome}
         onChange={(e)=>handleChageNome(e)}  
       />
       <p>Nome digitado: {nome}</p>   
     </>
  );
}

Aula 15 - Manipulando objetos com State. Somente um state para vários componentes - vamos falar mais sobre uso de state e componentes de formulário. Vamos usar um objeto no state para manipular vários elementos de formulário somente com um state. Com este recurso podemos indicar se um componentes será mostrado/renderizado ou não, além de outras possibilidades.

Aula 16 - Elevação de STATE -  vamos aprender sobre elevação de state, um recurso muito importante em React, onde passamos um state de um componente pai até chegar no componentefilho que irá usar o state. Com este recurso podemos indicar se um componentes será mostrado/renderizado ou não, além de outras possibilidades.

import React,{useState} from 'react'
import './App.css'
import Nota from './componentes/Nota'
import Resultado from './componentes/Resultado'

export default function App(){
   const [nota1,setNota1]=useState(0)
   const [nota2,setNota2]=useState(0)
   const [nota3,setNota3]=useState(0)
   const [nota4,setNota4]=useState(0) 
               
   return(
     <>
       <Nota num={1} nota={nota1} setNota={setNota1}/>
       <Nota num={2} nota={nota2} setNota={setNota2}/>
       <Nota num={3} nota={nota3} setNota={setNota3}/>
       <Nota num={4} nota={nota4} setNota={setNota4}/>
       <Resultado somaNotas={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)}/>
     </>
  );
}

Aula 17 - Solução do desafio da aula 16 sobre elevação de state e state com objetos - vamos resolver o desafio da aula 16 sobre elevação de state e state com objetos.

Aula 18 - Aprendendo sobre CONTENÇÃO em React - vamos aprender sobre contenção em React, que é caputrar elementos que estão dentro de outros elementos.






