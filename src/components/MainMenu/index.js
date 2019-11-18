import React from 'react';
import * as S from './styles';
import MainMenuItem from './components/MenuItem';

export default class MainMenu extends React.Component {
  render() {
    return (
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Logo />
        </S.LogoWrapper>

        <S.ItemsWrapper>
          <MainMenuItem label="Conta Corrente" />
          <MainMenuItem label="Câmbio" />
          <MainMenuItem label="Cheque" />
          <MainMenuItem label="Cartão de Crédito" />
          <MainMenuItem label="Cartão Pré Pago" />
          <MainMenuItem label="Empréstimo" />
          <MainMenuItem label="Conta Corrente" />
        </S.ItemsWrapper>
      </S.Wrapper>
    )
  }
}