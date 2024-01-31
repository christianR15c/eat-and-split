import React from 'react';
import Friend from './Friend';

const FriendsList = ({
  friends,
  onSelection,
  selectedFriend,
  setSelectedFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
