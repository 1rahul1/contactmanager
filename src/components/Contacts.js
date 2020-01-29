import React, { Component } from 'react';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Karen Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 3,
          name: 'Lucy Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555'
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}

export default Contacts;
