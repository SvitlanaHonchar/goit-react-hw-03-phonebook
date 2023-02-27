import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';

class Filter extends Component {
  render() {
    return (
      <div>
        <StyledLabel htmlFor="">
          <span>Filter by name:</span>
          <input
            type="text"
            placeholder="name"
            onChange={this.props.onFilterContacts}
          />
        </StyledLabel>
      </div>
    );
  }
}

export default Filter;

Filter.propTypes = { onFilterContacts: PropTypes.func };
