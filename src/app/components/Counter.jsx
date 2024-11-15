import React from 'react'
import { useSelector } from 'react-redux'
const Counter = () => {
  const counter =useSelector((state)=>state.counterStore.count);
  return (
    <div className='text-white'>Counter: {counter}</div>
  )
}

export default Counter