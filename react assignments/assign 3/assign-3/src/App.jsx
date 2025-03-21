import React from 'react'
import { useState } from 'react'
const App = () => {
const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addNumber = (num, atStart) => {
    if (atStart) {
      setNumbers([num, ...numbers]);
    } else {
      setNumbers([...numbers, num]);
    }
  };

  const deleteAtIndex = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  return (
    <div>
    <h3>Numbers: {JSON.stringify(numbers)}</h3>
    <button onClick={() => addNumber(0, true)}>Add at Start</button>
    <button onClick={() => addNumber(0, false)}>Add at End</button>
    <button onClick={() => deleteAtIndex(2)}>Delete at Index 2</button>
  </div>
  )
}

export default App