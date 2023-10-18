// room component

import React from 'react';

function Room(props) {
  const { roomNumber, roomStatus } = props;
  console.log('Room ~ roomNumber:', roomNumber);
  return (
    <div className="room">
      <span>{roomNumber}</span>
    </div>
  );
}

export default Room;
