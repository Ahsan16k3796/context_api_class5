import React from 'react';
import './App.css';
import Child from './child'
import Child2 from './child2';

function Parent(props) {
  return (
    <div>
      <Child> </Child>

      <Child2></Child2>
    </div>
  );
}

export default Parent;
