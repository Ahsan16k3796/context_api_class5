import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent'
import ValueContext from './ValueContext';

function App() {
  let [number,setnumber]=useState(45);
  
  return (
<ValueContext.Provider value={78}>    
   <div> 
     Number in App.js is: {number}
     <Parent></Parent>
     {/* <button onClick={()=>(setnumber(++number))}>
       +
     </button> */}
   </div>
  </ValueContext.Provider>

  );
}

export default App;
