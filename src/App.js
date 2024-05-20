import logo from './logo.svg';
import './App.css';
import Greeting from './Soal/soal1';
import ClickCounter from './Soal/soal2';
import MessageDisplay from './Soal/soal3';
import ClickCounterWithEffect from './Soal/soal4';
import SimpleForm from './Soal/soal5';

function App() {
  return (
    <div className="App">
      <Greeting>
      </Greeting>
      <ClickCounter></ClickCounter>
      <MessageDisplay></MessageDisplay>
      <ClickCounterWithEffect></ClickCounterWithEffect>
      <SimpleForm></SimpleForm>
    </div>
  );
}

export default App;
