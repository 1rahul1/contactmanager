import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {};

  onShowClick = (name, e) => {
    console.log(name);
  };

  render() {
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}{' '}
          <i
            onClick={this.onShowClick.bind(this, contact.name)}
            className="fas fa-sort-down"
          ></i>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {contact.email}</li>
          <li className="list-group-item">Phone: {contact.phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
