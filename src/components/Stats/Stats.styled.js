import styled from 'styled-components';

export const List = styled.ul`
  background-color: aliceblue;
  border: 2px;
  border-color: black;
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  border: 2px solid red;
  border-radius: 3px;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
