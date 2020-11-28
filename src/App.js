import React from 'react';
import './App.css';
import ClassState from './Components/Class/ClassState';
import FunctionState from './Components/Function/FunctionState';

function App() {
  return (
    <div className="App">
      <h1>State</h1>
      <ClassState />
      <br/>
      <hr/>
      <FunctionState />
    </div>
  );
}

export default App;
