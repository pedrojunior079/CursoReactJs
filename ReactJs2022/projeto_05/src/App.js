import './App.css';
import OlaMundo from './components/OlaMundo'; 
import DizerMeuNome from './components/DizerMeuNome';
import Pessoa from './components/Pessoa';

function App() {
 
  const nome = 'Maria'
  

  return (
    <div className="App">
      
      <OlaMundo/>
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
