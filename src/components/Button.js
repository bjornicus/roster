import styled from 'styled-components';

export const buttonHeight = '2rem';

export const Button = styled.button`
  border: 1px solid #52aa5e;
  height: ${buttonHeight};
  background-color: ${props => props.color || '#388659'};
`;

export default Button;
