import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent'
import ValueContext from './ValueContext';
import numberReducer from './numberreducer';

function App() {
  let value=useState(45);

  let number=useReducer(numberReducer);

  
  return (
<ValueContext.Provider value={value}>    
   <div> 
    
     <Parent></Parent>
     {/* <button onClick={()=>(setnumber(++number))}>
       +
     </button> */}
   </div>
  </ValueContext.Provider>

  );
}

export default App;
