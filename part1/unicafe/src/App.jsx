import { useState } from 'react'




const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)

  const total = () => {
    return good + neutral + bad
  }

  const average = () => {
    return (good - bad) / total()
  }

  const positivePercentage = () => {
    return (good / total()) * 100
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseByOneGood}>good</button>
      <button onClick={increaseByOneNeutral}>neutral</button>
      <button onClick={increaseByOneBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total()}</p>
      <p>average {average()}</p>
      <p>positive {positivePercentage()} %</p>
    </div>
  )
}

export default App
