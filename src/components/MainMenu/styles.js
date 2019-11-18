import styled from 'styled-components';
import LogoImage from '../../assets/img/crefisa-logo.png';

export const Wrapper = styled('div')`
  flex: 0 0 300px;
  background-color: #023ACB;
  background-image: linear-gradient(193deg, #023ACB 40px, #23B9E2 630px);
`;

export const LogoWrapper = styled('div')`
  padding: 15px 30px;
`;

export const Logo = styled('div')`
  height: 40px;
  background-image: url('${LogoImage}');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ItemsWrapper = styled('div')`
  color: white;
` ;
