import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const newPhoneContact = {name: newName};
    setPersons(persons.concat(newPhoneContact));
    setNewName('');
  }

  const handleNewNameButton = (event) => {
    setNewName(event.target.value);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          name: <input value={newName} onChange={handleNewNameButton}/>
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