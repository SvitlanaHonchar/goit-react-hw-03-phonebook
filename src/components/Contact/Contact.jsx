import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { contact } = this.props;

    return (
      <>
        👨🏻‍🦱 {contact.name}: {contact.number}
        <button
          onClick={() => {
            this.props.onRemoveContact(contact.name);
          }}
          type="button"
        >
          Remove contact
        </button>
      </>
    );
  }
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
