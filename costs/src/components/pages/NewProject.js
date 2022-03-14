import {useHistory} from "react-router-doom";
import ProjectForm from "../project/ProjectForm.js";
import styles from "./NewProject.module.css";

function NewProject(){

    const useHistory = useHistory();

    function createPost(project){
      //initialize cost and service
      project.cost = 0
      project.service = []

      fetch('http://localhost:5000/´projects',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(project),
      })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        history.push('/projects', {message: 'Projeto criado com sucesso!'});
      })
      .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
          <h1>Criar projeto</h1>
          <p>Crie seu projeto para depois adicionar os serviços</p>
          <p>formulário</p>
          <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    ); 
}

export default NewProject;