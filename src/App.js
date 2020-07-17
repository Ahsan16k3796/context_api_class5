import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent'

function App() {
  let [number,setnumber]=useState(45);
  
  return (
  <div> 
    Number in App.js is: {number}
    <Parent num={number}></Parent>
    <button onClick={()=>(setnumber(++number))}>
      +
    </button>
  </div>

  );
}

export default App;
