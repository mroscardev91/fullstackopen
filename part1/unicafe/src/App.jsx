import { useState } from 'react'





const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}


const StadisticLine = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}


const Stadistics = ({ good, neutral, bad }) => {
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
    <>
      <StadisticLine text='all' value={total()} />
      <StadisticLine text='average' value={average()} />
      <StadisticLine text='positive' value={positivePercentage()} />
    </>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={increaseByOneGood} text='good' />
        <Button onClick={increaseByOneNeutral} text='neutral' />
        <Button onClick={increaseByOneBad} text='bad' />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
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
      <Stadistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
