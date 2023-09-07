import { useState } from 'react';
import './App.css';

function App() {
  const [bottle, setBottle] = useState(1)
  const [hour, setHour] = useState(1)
  const [weight, setWeight] = useState(89)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  //const numbers = new Array(24).fill(null).map((_,i) => i+1)

  const calculate = () => {

    let alko = 0
    let litres = bottle * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let hops = grams - (burning * hour)
    if (gender === 'male') {
      alko = (hops / (weight * 0.7))
    }

    else {
      alko = (hops / (weight * 0.6))
    }

    if (alko < 0) {
      alko = 0
    }
    setResult(alko)
  }
  return (
    <div id="container">
      <div>
        <h3>Calculating alcohol blood level</h3>
      </div>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles</label>
        <select value={bottle} onChange={e => setBottle(e.target.value)}>
          {
            numbers.map(bottle => (
              <option>{bottle}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Time</label>
        <select value={hour} onChange={e => setHour(e.target.value)}>
          {
            numbers.map(hour => (
              <option>{hour}</option>
            ))
          }
        </select>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>

        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <div>
          <button type="button" onClick={calculate}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;