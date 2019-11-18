import React from 'react';
import * as S from './styles';

export default class MainMenuItem extends React.Component {
  render() {
    return (
      <S.Wrapper>
        {this.props.label}
      </S.Wrapper>
    )
  }
}