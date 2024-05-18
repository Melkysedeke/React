import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <SayMyName nome="Melky"/>
      <SayMyName nome="José"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Melky" idade="21" profissao="Programador" foto="https://via.palceholder.com/150"/>
    </div>
  );
}

export default App;
