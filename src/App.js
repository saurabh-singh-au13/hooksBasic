import React, { useState } from 'react'

import Style from './Style.css';


// useState is basically a function which return a two items as an array
// 2 data 1st is current data and the 2nd one is updated data.




function App() {

  const state = useState();

  const [count, setCount] = useState(0);


  // let count = 0;


  const IncMen = () => {
    setCount(count + 1);
    // console.log("Clicked "+ count++);
  }
  return (
    <>
      <div className='container'>
        <div className='item'>
          <h1 className='count'> {count}</h1>
          <button className='btn' onClick={IncMen}>  Click me </button>
        </div>

      </div>


    </>


  );
}

export default App;
