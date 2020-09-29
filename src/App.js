import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHookForm from "./components/reactHookForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>header</h1>
      </header>
      <main>
        <ReactHookForm />
      </main>
    </div>
  );
}

export default App;
