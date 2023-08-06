import styled, { css } from 'styled-components';

export const Statisticscard = styled.section`
  margin-top: 35px;
  width: 330px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: coral;
  border-radius: 10px;
`;
export const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 10px 0;
  margin: 0;
`;

export const Statisticslist = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const getRandomHSLColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = '50%';
  const lightness = '50%';
  return `hsl(${hue}, ${saturation}, ${lightness})`;
};

export const ListItem = styled.li`
  background-color: ${getRandomHSLColor()};
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  ${({ percent }) => css`
    background-color: ${percent ? getRandomHSLColor() : 'white'};
  `}
`;
