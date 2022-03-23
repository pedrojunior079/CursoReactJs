import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject1.module.css";

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto pra depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    );
 }
 
 export default NewProject;