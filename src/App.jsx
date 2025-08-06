import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])

  function inputData(value) {
    setValue(value);
    var arr = [];
    var water = Number(value) * 3;
    for(var i = 1; i <= 5; i++) {
      arr.push(`${water} x ${i} = ${(water * i).toFixed(2)} `)
    }
    setResults(arr);
  }

  return (
    <>
      <div className="calculator">
          <div className="input-group">
              <input type="number" step="0.01" value={value} onChange={function(e) { setValue(e.target.value) }}/>
              <button onClick={function() {setValue("")}}>クリア</button>
          </div>
          
          <div className="result" id="result">
            <div className="card">
              <table>
                {results.map(result => (
                  <tr>
                    <td>{result}</td>
                  </tr>
                ))}
              </table>
            </div>            
          </div>
      </div>

    </>
  )
}

export default App
