import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import { ContactsListItem } from './ContactsList.style';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
              contactId={id}
            />
          </ContactsListItem>
        );
      })}
    </ul>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
