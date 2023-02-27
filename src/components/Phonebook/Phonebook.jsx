import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledBtn } from './PhoneBook.styled';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };
    // console.log(contact);

    const isSuccess = this.props.onAddContact(contact);
    if (isSuccess) {
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleInput}
              required
            />
          </label>
          <label htmlFor="">
            <span>Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="number"
              value={this.state.number}
              onChange={this.handleInput}
              required
            />
          </label>
          <StyledBtn type="submit">Add contact</StyledBtn>
        </StyledForm>
      </div>
    );
  }
}

export default Phonebook;

Phonebook.propTypes = {
  onAddContact: PropTypes.func,
  onRemoveContact: PropTypes.func,
};
