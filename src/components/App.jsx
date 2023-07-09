import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContacts';
import PhonebookFilter from './PhonebookFilter';
import filterContacts from '../utils/filterContacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    const id = nanoid();
    const { contacts } = this.state;
    const isContactExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id }],
    }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const newContacts = filterContacts(contacts, filter);
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm
          
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <PhonebookFilter
          filter={filter}
          onFilterSet={this.handleFilterChange}
        />
        <PhonebookContacts
          contacts={newContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;