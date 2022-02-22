import ProjectForm from "../project/ProjectForm.js";
import styles from "./NewProject.module.css";

function NewProject(){
    return(
        <div className={styles.newproject_container}>
          <h1>Criar projeto</h1>
          <p>Crie seu projeto para depois adicionar os serviços</p>
          <p>formulário</p>
          <ProjectForm btnText="Criar Projeto"/>
        </div>
    ); 
}

export default NewProject;