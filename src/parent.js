import React from 'react';
import './App.css';
import Child from './child'

function Parent(props) {
  return (
    <div>
       Number in Parent is: {props.num}
      <Child num={props.num}> 
      </Child>
    </div>
  );
}

export default Parent;
