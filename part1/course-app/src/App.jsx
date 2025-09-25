const App = () => {
  const Header = ({title}) => {
    return (
      <>
        <h1>{title}</h1>
      </>
    )
  }

  const Content = ({ parts }) => {
    const content = parts.map(part => <Part key={part.name} part={part} />);
    return (
      <>
        {content}
      </>
    );
  }

  const Part = ({ part }) => {
    return (
      <>
        <p> {part.name} {part.exercises}</p>
      </>
    )
  }

  const Total = ({parts}) => {
    let total = 0;
    parts.forEach( part => {total += part.exercises} );
    return <p>Number of exercises {total}</p>
  }

  const course = {
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.title}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App