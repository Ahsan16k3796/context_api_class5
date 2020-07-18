import React from 'react'
import Parent from './parent'
import ValueContext from './ValueContext';
import numberReducer from './numberreducer';
import { useReducer } from 'react'

function Child2(){
    let [state,dispt]=useReducer(numberReducer,56);
    return(
        <div> Child2{state} 
           <button onClick={()=>{dispt({type:"INCREMENT",val: 45})}}> Increment </button>
           <button onClick={()=>{dispt({type:"DECREMENT",val: 45})}}> Decrement </button>   
        
        </div>
    )
}

export default Child2;