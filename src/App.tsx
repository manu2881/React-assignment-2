import React from 'react';
import UserCard from './components/UserCard';

const userCardData = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    verified: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    verified: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    verified: false,
  },
];

const App = () => {
  return (
    <div>
      {userCardData.map((userCard) => (
        <UserCard
          key={userCard.id}
          title={userCard.title}
          verified={userCard.verified}
        />
      ))}
    </div>
  );
};

export default App;
