import './App.css';
import DizerMeuNome from './components/DizerMeuNome';
import Frase from './components/Frase';
import Lista from './components/Lista';

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
      <Lista/>
      
    </div>
  );
}

export default App;
