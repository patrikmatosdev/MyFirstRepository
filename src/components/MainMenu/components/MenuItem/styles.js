import styled from 'styled-components';

export const Wrapper = styled('div')`
  padding: 20px 25px;
  transition: .3s;
  font-weight: bold;
  font-size: 16px;
  border-left: 5px solid transparent;

  &:hover {
    cursor: pointer;
    background: #1E90FF;
    border-left: 5px solid white;
  }
`;

