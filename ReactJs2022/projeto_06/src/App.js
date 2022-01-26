import './App.css';
import DizerMeuNome from './components/DizerMeuNome';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
 
  const nome = 'Maria'
  

  return (
    <div className="App">
      
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <DizerMeuNome nome="PedroJr"/>
      <DizerMeuNome nome="João"/>
      <DizerMeuNome nome={nome}/>
      <Pessoa nome="Rodrigo" 
              idade="28" 
              profissao="programador" 
              foto="https://via.placeholder.com/150"
      />
      
    </div>
  );
}

export default App;
