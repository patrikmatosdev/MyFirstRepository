import React from 'react';
import * as S from './styles';

export default class Button extends React.Component {
  getBGColor = () => {
    const type = this.props.type;
    if(type === 'primary') {
      return '#1275d6';
    }
    if(type === 'delete') {
      return '#A22';
    }
  }
  render = () => {
    const bgcolor = this.getBGColor();
    return(
      <S.Wrapper bgcolor={bgcolor}>
        {this.props.label}
      </S.Wrapper>
    )
  }
}