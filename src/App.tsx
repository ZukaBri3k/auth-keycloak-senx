import React from 'react';
import useAuth from './hook/useAuth';

function App() {

  useAuth();

  return (
    <div className="App">
      <h1>Hello World !</h1>
    </div>
  );
}

export default App;
