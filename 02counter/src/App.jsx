import { useState } from 'react'

import './App.css'

//below code will work fine but won't update the value in UI
//only console will show the updated value of counter


/* function App() {
  let counter = 15;

  const addCount = () =>{
    counter = counter+1;
    console.log(counter);
  }

  const removeCount = ()=>{
    counter = counter-1;
    console.log(counter);
  } */


/* 
  there is a way to update things in UI also -> STATE
  State - A built-in React object that is used to contain data of info about container
  is a method that returns values in form of 'ARRAY'
  const [variable, function] = useState(15)
 */
function App() {

  const [counter,setCounter] = useState(15);

  // const addCount = () =>{
  //   setCounter(counter+1);
  // }

  /*
  what if we write "setCounter(counter+1);" multiple time
  ans - it will still update the value by 1
  reason - "Batching"
  Batching - React does not actually send things immideatly after you perform any action on state
  It bundles up everything
  */

  // const addCount = () =>{
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  // }

  /*
    Solution - can use callback -> setCounter(()=>{})
    desc - there is a guarantee that callback needs to finish - returning value of state
  */

    const addCount = () =>{
       setCounter((prevCounter)=>prevCounter+1);
       setCounter((prevCounter)=>prevCounter+1);
       setCounter((prevCounter)=>prevCounter+1);
       setCounter((prevCounter)=>prevCounter+1);
       //will increse value of counter 4 time in one click
     }

  const removeCount = ()=>{
    setCounter(counter-1);
  }


  return (
    <>
      <h1>React Course With Sneha </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addCount}>Add count</button>{" "}
      <button onClick={removeCount}>Remove count</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
