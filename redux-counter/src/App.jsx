import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'

function App() {

  const count = useSelector((state) => state.count.counterVal.value); 
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {dispatch(increment())}}
        >
          Increment
        </button>
        <div>{count}</div>
        <button
          aria-label="Decrement value"
          onClick={()=> {dispatch(decrement())}}
        >
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
