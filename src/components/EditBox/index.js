import React from 'react';
import * as S from './styles';

export default class EditBox extends React.Component {

  render = () => {
    const title = this.props.title;
    const cont = this.props.children;
    const help = this.props.help;
    
    return (
      <S.Wrapper>
        <S.Header>
          <S.Title>{title}</S.Title>
          {!!help && <S.HelpMessage>{help}</S.HelpMessage>}
        </S.Header>
        <S.ContentWrapper>
          <S.Content>{cont}</S.Content>
          <S.ButtonWrapper>
            <S.Button>BUTTON</S.Button>
          </S.ButtonWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    )
  }
}