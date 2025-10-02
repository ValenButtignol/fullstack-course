const Course = ({course}) => {
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
    let current = 0;
    const total = parts.reduce((accumulator, currentVal) => accumulator + currentVal.exercises,
      current
    );
    return <p>Number of exercises {total}</p>
  }

  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course;