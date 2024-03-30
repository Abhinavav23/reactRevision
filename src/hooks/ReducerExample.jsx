import React, { useReducer } from 'react'

export const ReducerExample = () => {
// const arr = [6,7,3,8];

// const sum = arr.reduce((accumulatedVal, currValue) => {
//     console.log("accumulatedVal", accumulatedVal);
//     console.log("currValue", currValue);
//     console.log("=============");
//     return accumulatedVal+currValue;
// }, 0);
// console.log("res", sum);

const reducerFun = (initialVal, action) => {
    console.log("initialVal", initialVal);
    console.log("action", action);
    
    // if(action === "add"){
    //     return initialVal+10;
    // }
    // if(action === "substract"){
    //     return initialVal-10
    // }

    const {operator, payload} = action;

     if(operator === "add"){
        return initialVal+payload;
    }
    if(operator === "substract"){
        return initialVal-payload
    }
}

const [count, dispatchCount] = useReducer(reducerFun, 0);

const multipleDispatch = () => {
    dispatchCount({operator: "add", payload: 2})
    dispatchCount({operator: "add", payload: 2})
    dispatchCount({operator: "add", payload: 2})
}

console.log("rendering");

  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={() => dispatchCount({operator: "add", payload: 10})}>+10</button>
        <button onClick={() => dispatchCount({operator: "substract", payload: 10})}>-10</button>
        <button onClick={() => dispatchCount({operator: "add", payload: 5})}>+5</button>
        <button onClick={() => dispatchCount({operator: "substract", payload: 5})}>-5</button>
        <button onClick={multipleDispatch}>+2, 3 times</button>
    </div>
  )
}


