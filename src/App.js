import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Hover from './components/Hover';
import InputForm from './components/Input';
import Form from './components/Form';
import Contacs from './components/Contacs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Contacs/>
      </header>
    </div>
  );
}

export default App;

