import './App.css';
import Frase from './componets/Frase';
import HelloWorld from './componets/HelloWorld';

function App() {
  const name = 'Wellington'
  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {name}!</p>
      <img src={url} alt='Minha imagem'/>
      < HelloWorld/>
      < Frase/>
    </div>
  );
}

export default App;
