import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
