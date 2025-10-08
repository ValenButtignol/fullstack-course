import { useState, useEffect } from 'react';
import axios from 'axios';
import Persons from './components/Persons';
import PhonebookForm from './components/PhonebookForm';
import FilterPersons from './components/FilterPersons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterPersons filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PhonebookForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  );
};

export default App;