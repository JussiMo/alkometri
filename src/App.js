import {useState} from 'react';
import './App.css';

function App() {
  //const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  const numbers = new Array(24).fill(null).map((_,i) => i+1)
  return (
    <div id="container">
      <div>
      <label>Bottles</label>
      <select>
        {
          numbers.map(bottle => (
            <option value={bottle}>{bottle} pulloa</option>
          ))
        }
      </select>
      </div>
      <div>
      <label>Time</label>
      <select>
        {
          numbers.map(hour => (
            <option value={hour}>{hour} tuntia</option>
          ))
        }
      </select>
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