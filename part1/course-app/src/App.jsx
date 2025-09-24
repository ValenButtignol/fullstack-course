const App = () => {
  const Header = (course) => {
    return (
      <>
        <h1>{course.name}</h1>
      </>
    )
  }

  const Content = () => {
    return (
      <>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
      </>
    )
  }

  const Part = (content) => {
    return (
      <>
        <p> {content.part} {content.exercises}</p>
      </>
    )
  }

  const Total = (exercises) => {
    return <p>Number of exercises {exercises.total}</p>
  }

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App