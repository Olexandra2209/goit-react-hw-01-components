import PropTypes from 'prop-types';

import {
  Statisticscard,
  Statisticslist,
  Title,
  ListItem,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <Statisticscard>
      {title.length > 0 && <Title>{title}</Title>}
      <Statisticslist>
        {data.map(item => (
          <ListItem key={item.id} percent={item.percentage}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </ListItem>
        ))}
      </Statisticslist>
    </Statisticscard>
  );
};
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
