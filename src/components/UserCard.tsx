import React from 'react';
import UserCardTitle from './UserCardTitle';
import UserCardDetail from './UserCardDetail';

const UserCard = ({ title, verified }) => {
  return (
    <div>
      <UserCardTitle title={title} />
      <UserCardDetail verified={verified} />
    </div>
  );
};

export default UserCard;
