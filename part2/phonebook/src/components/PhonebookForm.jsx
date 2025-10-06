import { useState } from 'react';

const PhonebookForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const repeatedPerson = (name) => persons.some(person => person.name === name);
  const repeatedNumber = (number) => persons.some(person => person.number === number);

  const handleNewNameButton = (event) => setNewName(event.target.value);
  const handleNewNumberButton = (event) => setNewNumber(event.target.value);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (newNumber === '') {
      alert("Number can't be empty, try again");
      return;
    }
    if (repeatedPerson(newName)) {
      alert(`${newName} is already used, try again`);
      return;
    }
    if (repeatedNumber(newNumber)) {
      alert(`${newNumber} is already used, try again`);
      return;
    }
    const newPhoneContact = {
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(newPhoneContact));
    setNewName('');
    setNewNumber('');
  };

  return (
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
  );
};

export default PhonebookForm;