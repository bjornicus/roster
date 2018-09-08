import styled from 'styled-components';

export const buttonHeight = '2rem';

export const Button = styled.button`
  border: 1px solid #52aa5e;
  border-radius: 5px;
  height: ${buttonHeight};
  min-width: ${buttonHeight};
  background-color: ${props => props.color || '#388659'};
`;

export default Button;
