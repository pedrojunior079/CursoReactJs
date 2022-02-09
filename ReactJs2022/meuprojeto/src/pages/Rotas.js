import React from "react";
import {Route, BrowserRouter} from "react-router-dom";

import Home from "./Home";
import Empresa from "./Empresa";
import Contato from "./Contato";

const Rotas = () => {
    return(
        <BrowserRouter>
             <Route component = {Home} path="/" exact/>
             <Route component = {Empresa} path="/empresa"/>
             <Route component = {Contato} path="/Contato"/>
        </BrowserRouter>
    )
}

export default Rotas;