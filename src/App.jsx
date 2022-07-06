import React from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactsForm from './components/ContactsForm/ContactsForm';
import { Filter } from './components/Filter/Filter';
import { Message } from './components/Message/Message';
import { Container } from './components/ui/Container';
import { MainTitle, SecondTitle, Section } from './components/ui';
import Contacts from 'components/Contacts/Contacts';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.filtredContacts();
    return (
      <Container>
        <Section>
          <MainTitle>Phonebook</MainTitle>
          <ContactsForm onSubmit={this.addContact} />

          <SecondTitle>Contacts</SecondTitle>
          <Filter filter={filter} changeFilter={this.changeFilter} />
          {this.state.contacts.length > 0 ? (
            <Contacts
              contacts={filtredContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Message text="Contact list is empty." />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
