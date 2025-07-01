import { useState } from "react";

function CounterWS(){
   // let arr = useState(0);//gen. - initial state = 0
   
  // let [stateVariable , setStateVariable] = useState(10)

  //decontruct array - here - these two are first and second elemnt of array

   let [count , setCount] = useState(0); //initialization

   let incCount = () =>{
    setCount(count + 2 ); 
    // count value update on render stage not on call stage
    console.log(count); // old value (before re render)

    //to set permanently
       //setCount(value)
   
    };

   return(
    <div>
        <h3>Counter = {count}</h3>
        <button onClick={incCount}>Increase Count </button>
    </div>
   )
}

export default CounterWS;