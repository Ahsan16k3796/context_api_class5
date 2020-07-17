import React, { useState } from 'react';
import Parent from './parent'

function Child(props) {
  
  return (
  <div> 
    The number inherited from Parent and upper levels is: {props.num}
  </div>
  );
}

export default Child;