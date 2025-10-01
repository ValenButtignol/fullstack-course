import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>
    {text}
  </button>
}

const Statistics = (props) => {
  console.log(props);
  if (props.all == 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <Stat stat="good" number={props.good}/>
      <Stat stat="neutral" number={props.neutral}/>
      <Stat stat="bad" number={props.bad}/>
      <Stat stat="all" number={props.all}/>
      <Stat stat="average" number={props.average}/>
      <Stat stat="positive" number={props.positive + "%"}/>
    </>
  );
}

const Stat = ({stat, number}) => {
  return <p>{stat} {number}</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPostitive] = useState(0);
  
  const stats = {
    "good" : good,
    "neutral" : neutral,
    "bad" : bad,
    "all" : all,
    "average": average,
    "positive": positive, 
  }

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
      <Statistics 
        good={stats.good} 
        neutral={stats.neutral}
        bad={stats.bad}
        all={stats.all}
        average={stats.average}
        positive={stats.positive}
      />
    </div>
  )
}

export default App