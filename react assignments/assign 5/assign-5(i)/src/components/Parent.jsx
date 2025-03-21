import React, { useState } from 'react'
import Child from './Child'
const Parent = () => {
  const [counter,setcounter]=useState(10);
  const increment=()=>setcounter(counter+1);
  const decrement=()=>setcounter(counter-1);
  return (
    <div>
     <h3>Parent</h3>
     <div>Counter:{counter}</div>
     <Child inc={increment} dec={decrement}/>
    </div>
  )
}

export default Parent