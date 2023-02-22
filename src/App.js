import './App.css';

function App() {
  const name = 'Wellington'
  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {name}!</p>
      <img src={url} alt='Minha imagem'/>
    </div>
  );
}

export default App;
