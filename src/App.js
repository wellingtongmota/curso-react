import './App.css';
import HelloWorld from './componets/HelloWorld'
import Pessoa from './componets/Pessoa';
import SayMyName from './componets/SayMyName';
import Frase from './componets/Frase';
import List from './componets/List';

function App() {
  const nome = 'Maria'

  return (
    <div className="App">
      {/* <HelloWorld /> */}
      <Frase />
      <Frase />
      <SayMyName nome='Wellington'/>
      <SayMyName nome='João' />
      <SayMyName nome={nome} />
      <Pessoa nome='Rodrigo' idade='28' profissao='Programador' foto='https://via.placeholder.com/150'/>
      <List />
    </div>
  );
}

export default App;
