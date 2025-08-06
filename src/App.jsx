import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <h1>Mame</h1>
      <div className="card">
        <input value={value} onChange={function(e) { setValue(e.target.value) }}/>
      </div>
      <div>
        {value} × 4.69 = {(4.69 * Number(value)).toFixed(2)}
      </div>
    </>
  )
}

export default App
