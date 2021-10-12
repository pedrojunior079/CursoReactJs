import React from "react";

//Aula 22 - STATE em Componentes de Classe ReactJS

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state={
            ligado:false,
            velAtual:0,
        }
    }
    ligarDesligar(){
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>(
                {ligado:!state.ligado}
            )
        )
    }
    acelerar(){
        this.setState(
            (state,props)=>(
                {velAtual:this.state.velAtual + this.props.fator}
            )
        )
    }
    render(){ 
        return(
          <>
            <div>
               <h1>Meu Carro</h1>
               <p>Modelo: {this.modelo}</p>
               <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
               <p>Vel.Atual: {this.state.velAtual}</p>
               <button onClick={()=>this.ligarDesligar()}>
                    {this.state.ligado ? 'Desligar carro' : 'Ligar carro'}
               </button>
               <button onClick={()=>this.acelerar()}>
                    Acelerar
               </button>
            </div>
          </>  
        );
    }
}