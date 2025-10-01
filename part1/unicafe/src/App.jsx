import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>
    {text}
  </button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPostitive] = useState(0);

  const handleGoodButton = () => {
    const newGood = good + 1;
    const newAll = all + 1;
    setGood(newGood);
    setAll(newAll);
    setAverage((newGood - bad) / newAll);
    setPostitive(newGood / newAll);
  }
  
  const handleNeutralButton = () => {
    const newAll = all + 1;
    setNeutral(neutral + 1);
    setAll(newAll);
    setAverage((good + bad) / newAll);
    setPostitive(good / newAll);
  }
  
  const handleBadButton = () => {
    const newBad = bad + 1;
    const newAll = all + 1;
    setBad(newBad);
    setAll(newAll);
    setAverage((good - newBad) / newAll);
    setPostitive(good / newAll);
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodButton} text="good"/>
      <Button onClick={handleNeutralButton} text="neutral"/>
      <Button onClick={handleBadButton} text="bad"/>
      <h1>statistics</h1>
      <p> good {good}</p>
      <p> neutral {neutral}</p>
      <p> bad {bad}</p>
      <p> all {all}</p>
      <p> average {average}</p>
      <p> positive {positive}%</p>
    </div>
  )
}

export default App