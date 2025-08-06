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
      arr.push({"value": water.toFixed(2), "index": i, "calc": (water * i).toFixed(2)})
    }
    setResults(arr);
  }

  function clear() {
    setValue("")
    setResults([])
  }

  return (
    <>
      <div className="calculator">
          <div className="input-group">
              <input placeholder="豆の量" style={{"width": "60%"}} type="number" step="0.01" value={value} onChange={function(e) { inputData(e.target.value) }}/>
              <button onClick={function() {clear()}}>C</button>
          </div>
          
          <div className="result" id="result">
            <div className="card">
              <table>
                <tbody>
                  {results.map(result => (
                    <tr key={result.index}>
                      <td>{result.index}</td>
                      <td>杯目</td>
                      <td align="right">{result.calc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>            
          </div>
      </div>

    </>
  )
}

export default App
