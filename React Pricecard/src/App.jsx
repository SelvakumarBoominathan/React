import { useState } from 'react'
import reactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './pricecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card {...obj} />
    </>
  )
}

export default App



let obj = {
  C1: "FREE",
  C2: "PLUS",
  C3: "PRO",
  V1: "0",
  V2: "10",
  V3: "50",
}