import styled from 'styled-components';

export const Table = styled.table`
  border: 2px solid teal;
  border-collapse: collapse;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const TableHeader = styled.th`
  height: 40px;
  background-color: salmon;
  border: 2px solid black;
`;

export const TableBody = styled.tbody`
  :hover,
  :focus {
    background-color: aquamarine;
  }
`;

export const TableCell = styled.td`
  height: 40px;
  text-align: center;
  border: 2px solid teal;
`;
