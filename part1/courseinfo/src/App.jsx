

const Header = ({course}) =>{
  return(
    <h1>{course}</h1>
  )
}

const Part = ({part, exercises}) =>{
  return(
    <p>{part} {exercises}</p>
  )
}



const Content = ({content}) =>{
  return(
    <div>
      <Part part={content.part1} exercises={content.exercises1}/>
      <Part part={content.part2} exercises={content.exercises2}/>
      <Part part={content.part3} exercises={content.exercises3}/>
    </div>
  )
}

const Total = ({content}) =>{
  const total = content.exercises1 + content.exercises2 + content.exercises3
  return(
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const content = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total content={content}/>
    </div>
  )
}

export default App
