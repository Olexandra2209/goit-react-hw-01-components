import { Profile } from './Profile/Profile';
import profileItems from '../user.json';
import statisticsData from '../data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import Friendscard from '../friends.json';
import TransactionsList from '../transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile items={profileItems} />
      <Statistics title="Upload stats" data={statisticsData} />
      <FriendList friends={Friendscard} />
      <TransactionHistory transactions={TransactionsList} />
    </div>
  );
};
