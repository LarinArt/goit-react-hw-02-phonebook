import React from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactsForm from './contactsForm/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';
import { Message } from './message/Message';
import { Container } from './ui/Container';
import { MainTitle, SecondTitle, Section } from './ui';

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
          contacts: [newContact, ...contacts],
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
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const filtredContacts = this.filtredContacts();
    const deleteContact = this.deleteContact;
    const length = this.state.contacts.length;

    return (
      <Container>
        <Section>
          <MainTitle>Phonebook</MainTitle>
          <ContactsForm onSubmit={addContact} />

          <SecondTitle>Contacts</SecondTitle>
          <Filter filter={filter} changeFilter={changeFilter} />
          {length > 0 ? (
            <ContactsList
              contacts={filtredContacts}
              onDeleteContact={deleteContact}
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
