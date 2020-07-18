import React, { useState, useContext } from 'react';
import Parent from './parent'
import ValueContext from './ValueContext';

function Child(props) {
  let val = useContext(ValueContext);
  console.log(val);
  // uval=val[1];
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