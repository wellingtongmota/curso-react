import './App.css';
// import HelloWorld from './componets/HelloWorld'
// import Pessoa from './componets/Pessoa';
// import SayMyName from './componets/SayMyName';
// import Frase from './componets/Frase';
// import List from './componets/List';
import Evento from './componets/Evento';
import Form from './componets/Form';

function App() {
  // const nome = 'Maria'

  return (
    <div className="App">
      {/* <HelloWorld />
      <Frase />
      <Frase />
      <SayMyName nome='Wellington'/>
      <SayMyName nome='João' />
      <SayMyName nome={nome} />
      <Pessoa nome='Rodrigo' idade='28' profissao='Programador' foto='https://via.placeholder.com/150'/>
      <List /> */}

      <h1>Testando eventos</h1>
      <Evento />
      <Form />

    </div>
  );
}

export default App;
