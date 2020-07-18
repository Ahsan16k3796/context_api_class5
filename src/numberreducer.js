

const  numberReducer=(state, action)=> {
    switch (action.type) {
      case 'INCREMENT':
        return  (state-action.val+1);
      case 'DECREMENT':
        return (state+action.val-1);
    }
  }

  export default numberReducer;