import React from 'react';
import './App.scss'
import ReactHookForm from "./components/reactHookForm";
import TestHook from "./components/testHook";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>header</h1>
      </header>
      <main>
        <ReactHookForm />
        <TestHook />
      </main>
    </div>
  );
}

export default App;
