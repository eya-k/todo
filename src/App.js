import React from 'react';
import './App.css';
import ListTask from './ListTask';
import AddTask from './AddTask';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
