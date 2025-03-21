import React from 'react'

const Child = ({inc,dec}) => {
  return (
    <div>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      <h3>Child</h3>
    </div>
  )
}

export default Child