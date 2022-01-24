import './App.css';

function App() {
  const name = 'Pedro'
  const newName = name.toUpperCase()

  function soma(a, b){
     return a + b 
  }
  
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alterando o JSX!</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {soma(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
