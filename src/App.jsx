import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("")

  return (
    <>
      <h1>豆計算</h1>
      <div className="card">
        <input value={value} onChange={function(e) { setValue(e.target.value) }}/>
        <button onClick={function() {setValue("")}}>クリア</button>
      </div>
      <div>
        4.69 × {value} = {(4.69 * Number(value)).toFixed(2)}
      </div>
    </>
  )
}

export default App
