import React from 'react'
import Logo from './img/logo.png'

export default function Header(){
    return(
        <header>
           <img src={Logo}/>
           <h1>Curso de React</h1>
        </header>
    )
}