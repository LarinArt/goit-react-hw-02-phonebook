import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { ContactsButton, Number, Name } from './Contacts.style';
import { Wrapper } from 'components/ui/Wrapper';
import { Icon } from 'components/ui/Icon';

const Contact = ({ name, number, onDeleteContact, contactId }) => {
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
      </Wrapper>
      <Wrapper>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </Wrapper>
      <Wrapper>
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

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
