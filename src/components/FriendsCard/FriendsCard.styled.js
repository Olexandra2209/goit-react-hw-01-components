import styled from 'styled-components';

export const List = styled.li`
  background-color: floralwhite;
  border: 2px solid violet;
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
`;
export const Status = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.mark) {
      case 'true':
        return 'green';
      case 'false':
        return 'red';

      default:
        return 'orange';
    }
  }};
`;

export const Photo = styled.img`
  margin-left: 5px;
`;

export const Name = styled.p`
  color: black;
  font-size: 18px;
  margin-left: 15px;
`;
