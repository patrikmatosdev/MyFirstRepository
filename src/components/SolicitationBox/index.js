import React from 'react';
import * as S from './styles';

export default class SolicitationBox extends React.Component {
  getThemeColor = () => {
    const theme = this.props.theme;

    switch(theme) {
      case 'red': return '#090';
      case 'yellow': return '#990';
      case 'green': return '#A22';
      default: return '#bbb';
    }
  }

  getDate = () => {
    const date = this.props.date;

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const brDate = `${day}/${month}/${year}`;
    const time = `${hours}-${minutes} PM`;

    return `às ${brDate} - ${time}`;
  }
  
  render = () => {

    const title = this.props.title;
    const username = this.props.username;
    const description = this.props.description;
    const date = this.getDate();

    const color = this.getThemeColor();

    return (
      <S.Wrapper>
        <S.Line color={color} />
        <S.Content>
          <S.Title color={color}>{title}</S.Title>
          <S.UserName>{username},</S.UserName>
          <S.Description>{description}</S.Description>
          <S.Time>{date}</S.Time>
        </S.Content>
      </S.Wrapper>
    )
  }
}