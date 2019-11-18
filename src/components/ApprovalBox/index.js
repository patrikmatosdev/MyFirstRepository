import React from 'react';
import * as S from './styles';
import Button from '../Button';

export default class ApprovaBox extends React.Component {
  render = () => {
    const title = this.props.title;
    const username = this.props.UserName;
    const description = this.props.description;

    return(
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Title>{title}</S.Title>
          <S.UserName>{username}</S.UserName>
          <S.Description>{description}</S.Description>         
          <S.Data>10:00 AM - 16:00 PM</S.Data>
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <Button 
            type="primary" 
            label="Aprovar" 
          />
          &nbsp;&nbsp;&nbsp;
          <Button 
            type="delete" 
            label="Reprovar" 
          />
        </S.ButtonWrapper>
      </S.Wrapper>
    )
  }
}
