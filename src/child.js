import React, { useState, useContext } from 'react';
import Parent from './parent'
import ValueContext from './ValueContext';

function Child(props) {
  let val = useContext(ValueContext);
  return (
  <div> 
    The number inherited from Parent and upper levels is: {val}
  </div>
  );
}

export default Child;