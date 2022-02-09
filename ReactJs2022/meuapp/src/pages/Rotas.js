import React from "react";
import {Route, BrowserRouter} from "react";
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Route component = {Home} path="/" exact />
            <Route component = {Sobre} path="/sobre" />
            <Route component = {Usuario} path="/usuario" />
        </BrowserRouter>
    );
}

export default Rotas;