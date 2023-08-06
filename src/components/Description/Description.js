// import PropTypes from 'prop-types';

// import { List, Img, Name, Text } from './Description.styled';

// export const Description = props => {
//   return (
//     <List>
//       <Img src={props.items.avatar} alt="User avatar" className="avatar" />
//       <Name>{props.items.username}</Name>
//       <Text>@{props.items.tag}</Text>
//       <Text>{props.items.location}</Text>
//     </List>
//   );
// };
// Description.propTypes = {
//   avatar: PropTypes.string,
//   username: PropTypes.string.isRequired,
//   teg: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
// };
import PropTypes from 'prop-types';
import { List, Img, Name, Text } from './Description.styled';

export const Description = ({ items }) => {
  return (
    <List>
      <Img src={items.avatar} alt="User avatar" className="avatar" />
      <Name>{items.username}</Name>
      <Text>@{items.tag}</Text>
      <Text>{items.location}</Text>
    </List>
  );
};

Description.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
