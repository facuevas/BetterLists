import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todo/Todos';

const App = () => {
  return(
    <div>
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;
