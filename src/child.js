import React, { useState, useContext } from 'react';
import Parent from './parent'
import ValueContext from './ValueContext';
import numberReducer from './numberreducer';

function Child(props) {
  let val = useContext(ValueContext);
  console.log(val);
  
  return (
  <div> 
    The number inherited from Parent and upper levels is: {val[0]}
    <br/>
    <button onClick={()=>{val[1](++val[0])}}>
      Update Value
    </button>
  </div>
  );
}

export default Child;