import styled from 'styled-components';
export const PlayerList = styled.ul`
  overflow: scroll;
  padding: 0;
`;
export const Player = styled.li`
  display: flex;
  align-items: center;
  line-height: 2rem;
  border: 1px solid blue;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const PlayerName = styled.h2`
  margin: 0.2rem;
  flex-grow: 1;
`;
