import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    this.setState({ contacts: gettingItem('contacts') ?? [] });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts.length !== this.state.length) {
      settingItem('contacts', this.state.contacts);
    }
  };

  onAddContact = contact => {
    if (this.state.contacts.some(c => c.name === contact.name)) {
      alert('This contact is already in the Phonebook');
      return false;
    }

    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState({
      contacts: [finalContact, ...this.state.contacts],
    });
    return true;
  };

  onRemoveContact = contactName => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.name !== contactName
      ),
    });
  };

  onFilterContacts = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div
        style={{
          // height: '100vh',
          marginLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <Phonebook
          onAddContact={this.onAddContact}
          onRemoveContact={this.onRemoveContact}
        />
        <Filter onFilterContacts={this.onFilterContacts} />
        <h2>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={this.onRemoveContact}
        />
      </div>
    );
  }
}

export default App;

// try/catch
function settingItem(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}

function gettingItem(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}
