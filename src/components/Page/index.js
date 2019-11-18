import React from 'react';
import styled from 'styled-components';
import MainMenu from '../MainMenu';

const Wrapper = styled('div')`
  display: flex;
  min-height: 100vh;
`;

const Content = styled('div')`
  flex: 1;
  padding: 50px;
`;

export default function Page(props) {
  return (
    <Wrapper>
      <MainMenu />

      <Content>
        {props.children}
      </Content>
    </Wrapper>
  )
}