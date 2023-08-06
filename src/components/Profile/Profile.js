import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';
import { Card } from './Profile.styled';

export const Profile = ({ items }) => {
  return (
    <Card>
      <Description items={items} />
      <Stats items={items} />
    </Card>
  );
};
