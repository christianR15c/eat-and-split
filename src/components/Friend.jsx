import React from 'react';

const Friend = ({ friend }) => {
  return (
    <div>
      <li>
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

        <button className="button">Select</button>
      </li>
    </div>
  );
};

export default Friend;