import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 200px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.accentBgColor};
  color: ${({ theme }) => theme.colors.secondTextColor};
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: background-color ${({ theme }) => theme.colors.mainAnimationHover};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondBgColor};
  }
`;
