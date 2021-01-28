import React from 'react';
import Greetings from './Greetings'
import Counter from './Counter'
import Form from './Form'
import ReducerSample from './ReducerSample'
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const onClick = (name : string) => {
    console.log(`${name} says hello`)
  }

  const onSubmit = (form : {name : string; description : string}) => {
    console.log(form);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greetings name='박지후' mark='오동' onClick = {onClick}/>
      <Counter />
      <Form onSubmit = {onSubmit}/>
      <ReducerSample /> 
    </div>
  );
}

export default App;