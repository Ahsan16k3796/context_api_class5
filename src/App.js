import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent'
import ValueContext from './ValueContext';

function App() {
  let value=useState(45);

  
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
