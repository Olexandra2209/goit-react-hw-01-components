// import PropTypes from 'prop-types';
// import { List, Item } from './Stats.styled';

// export const Stats = ({ items }) => {
//   return (
//     <List>
//       <Item>
//         <span>Followers</span>
//         <span>{items.stats.followers}</span>
//       </Item>
//       <Item>
//         <span>Views</span>
//         <span>{items.stats.views}</span>
//       </Item>
//       <Item>
//         <span>Likes</span>
//         <span>{items.stats.likes}</span>
//       </Item>
//     </List>
//   );
// };
// Stats.propTypes = {
//   items: PropTypes.shape({
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
import PropTypes from 'prop-types';
import { List, Item } from './Stats.styled';

export const Stats = ({ items }) => {
  return (
    <List>
      <Item>
        <span>Followers</span>
        <span>{items.stats.followers}</span>
      </Item>
      <Item>
        <span>Views</span>
        <span>{items.stats.views}</span>
      </Item>
      <Item>
        <span>Likes</span>
        <span>{items.stats.likes}</span>
      </Item>
    </List>
  );
};

Stats.propTypes = {
  items: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
