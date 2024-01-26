import React from 'react';
import { initialFriends } from '../data';
import Friend from './Friend';

const FriendsList = () => {
  const friends = initialFriends;
  console.log(friends);
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
