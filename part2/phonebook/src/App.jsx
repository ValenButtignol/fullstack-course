import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (newNumber === '') {
      alert("Number can't be empty, try again")
      return;
    }

    if (repeatedPerson(newName)) {
      alert(`${newName} is already used, try again`)
      return;
    }

    if (repeatedNumber(newNumber)) {
      alert(`${newNumber} is already used, try again`)
      return;
    }  
    
    const newPhoneContact = {
      name: newName,
      number: newNumber 
    };
    setPersons(persons.concat(newPhoneContact));
    setNewName('');
    setNewNumber('');
  }

  const repeatedPerson = (name) => {
    return persons.some(person => person.name === name);
  }

  const repeatedNumber = (number) => {
    return persons.some(person => person.number === number);
  }

  const handleNewNumberButton = (event) => {
    const number = event.target.value;
    setNewNumber(number);
  }

  const handleNewNameButton = (event) => {
    const name = event.target.value;
    setNewName(name);
  }
  


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          name: <input value={newName} onChange={handleNewNameButton}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberButton}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      <Persons persons={persons}/>
    </div>
  )
}

export default App