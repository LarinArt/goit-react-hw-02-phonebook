import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { ContactsButton, Number } from './Contacts.style';
import { Wrapper } from 'components/ui/Wrapper';
import { Icon } from 'components/ui/Icon';

const Contacts = ({ name, number, onDeleteContact, contactId }) => {
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{number}</Number>
        <ContactsButton
          type="button"
          onClick={() => onDeleteContact(contactId)}
        >
          <FaTrash />
        </ContactsButton>
      </Wrapper>
    </>
  );
};

Contacts.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
