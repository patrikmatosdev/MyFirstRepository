import styled from 'styled-components';


export const Wrapper = styled('div')`
  box-shadow: 0px  0px 5px #CCC;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;  
`;
export const Line = styled('div')`
  height: 6px;
  background: ${props => props.color};
`;

export const Content = styled('div')`
  padding: 30px 35px;
`;

export const Title = styled('div')`
  font-size: 18px;
  color: ${props => props.color};
  font-family: arial;
  margin-bottom: 30px;
  font-weight: bold;
`;
export const UserName = styled('div')`
  font-size: 16px;
  font-family: Arial;
  font-weight: bold;
  color: #333;
`;
export const Description = styled('div')`
  font-size:14px;
  font-family: Arial;
  margin-bottom: 30px;
  color: #333;
`;
export const Time = styled('div')`
  font-size: 15px;
  font-family: Arial;
  color: #999;
`;

 