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
      alko = (hops/(weight * 0.6))
    }
    console.log(alko)
    console.log(litres)
    console.log(grams)
    console.log(burning)
    console.log(hops)
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
        <select>
          {
            numbers.map(bottle => (
              <option value={bottle} onChange={e => setBottle(e.target.value)}>{bottle} pulloa</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Time</label>
        <select>
          {
            numbers.map(hour => (
              <option value={hour} onChange={e => setHour(e.target.value)}>{hour} tuntia</option>
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



/*    <div id="container">
<form onSubmit={calculate}>
<div>
  <label>Height</label>
  <input value={height} onChange={e => setHeight(e.target.value)}/>
</div>
<div>
  <label>Weight</label>
  <input value={weight} onChange={e => setWeight(e.target.value)}/>
</div>
<div>
  <output>{bmi.toFixed(1)}</output>
</div>
<button>Calculate</button>
</form>
</div> */

/*
function App() {
const [weight, setWeight] = useState(90)
const [intensity, setIntensity] = useState(1.7)
const [gender, setGender] = useState('male')
const [result, setResult] = useState(0)

//function calculate()
const calculate = () => {
  let calories = 0
  if (gender === 'male') {
    calories = (879 + 10.2 * weight) * intensity
  } 
  else {
    calories = (795 + 7.18 * weight) * intensity
  }
  setResult(calories)
}

  return (
    <div id="container">
      <h3>Calories</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Intensity</label>
        <select value={intensity} onChange={e => setIntensity(e.target.value)}>
          <option value="1.3">Light</option>
          <option value="1.5">Usual</option>
          <option value="1.7">Moderate</option>
          <option value="2">Hard</option>
          <option value="2.2">Very hard</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
    </div>
    <div>
      <label>Result</label>
      <output>{result.toFixed(0)}</output>
    </div>
    <div>
      <button type="button" onClick={calculate}>Calculate</button>
    </div>
    </div>

*/