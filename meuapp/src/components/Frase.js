import styles from './Frase.module.css'

function Frase(){
    return(
        <div classeName={styles.fraseContainer}>
            <p classeName={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
    );
}

export default Frase