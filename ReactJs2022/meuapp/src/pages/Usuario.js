import React from "react";
import {Link} from "react-router-dom";

const Usuario = () =>{
    return(
        <div>
            <h1>Usuário</h1>
            <Link to="/">retorna a página inicial</Link>
        </div>
    );
}

export default Usuario;