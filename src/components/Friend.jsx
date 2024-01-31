import React from 'react';
import Button from './Button';

const Friend = ({ friend, onSelection, selectedFriend, setSelectedFriend }) => {
  const isSelected = selectedFriend && selectedFriend.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {isSelected ? (
        <Button onClick={() => setSelectedFriend(null)}>Close</Button>
      ) : (
        <Button onClick={() => onSelection(friend)}>Select</Button>
      )}
    </li>
  );
};

export default Friend;
