import styled from 'styled-components';

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;