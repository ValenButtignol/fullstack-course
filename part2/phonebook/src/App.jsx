import { useState } from 'react';
import Persons from './components/Persons';
import PhonebookForm from './components/PhonebookForm';
import FilterPersons from './components/FilterPersons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filter, setFilter] = useState('');

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