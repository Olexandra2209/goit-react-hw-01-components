import PropTypes from 'prop-types';

import { List, Status, Photo, Name } from './FriendsCard.styled';

export const FriendsCard = ({ friend }) => {
  return (
    <>
      <List>
        <Status mark={friend.isOnline.toString()}></Status>
        <Photo src={friend.avatar} alt="User avatar" width="48" />
        <Name>{friend.name}</Name>
      </List>
    </>
  );
};
FriendsCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
