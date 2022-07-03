import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const SecondTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 30px;
`;
