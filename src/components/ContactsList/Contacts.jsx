import { ContactsList } from 'components/ContactsList/ContactsList';
import { Message } from 'components/Message/Message';
import React from 'react';

class Contacts extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filtredContacts = this.filtredContacts();
    return this.state.contacts.length > 0 ? (
      <ContactsList
        contacts={filtredContacts}
        onDeleteContact={this.deleteContact}
      />
    ) : (
      <Message text="Contact list is empty." />
    );
  }
}

export default Contacts;
