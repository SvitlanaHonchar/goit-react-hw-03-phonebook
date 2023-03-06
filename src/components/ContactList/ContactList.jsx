import Contact from 'components/Contact/Contact';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledLi, StyledOl } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <div>
        <StyledOl>
          {contacts.map(contact => {
            return (
              <StyledLi key={contact.name}>
                <Contact contact={contact} onRemoveContact={onRemoveContact} />
              </StyledLi>
            );
          })}
        </StyledOl>
      </div>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};
