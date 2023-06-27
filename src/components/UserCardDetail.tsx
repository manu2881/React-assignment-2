import React from 'react';

const UserCardDetail = ({ verified }) => {
  return <p>Verified: {verified ? 'Yes' : 'No'}</p>;
};

export default UserCardDetail;
