import PropTypes from 'prop-types';

import { FriendsCard } from 'components/FriendsCard/FriendsCard';
import { Listfriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Listfriends>
      {friends.map(friend => (
        <FriendsCard key={friend.id} friend={friend} />
      ))}
    </Listfriends>
  );
};
FriendsCard.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
