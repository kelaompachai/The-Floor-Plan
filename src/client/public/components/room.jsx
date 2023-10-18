/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// room component

import React from 'react';

function Room(props) {
  const { roomNumber, roomStatus, showRoomInfo } = props;
  return (
    <div className={`room ${roomStatus}`} onClick={(e) => { showRoomInfo(roomNumber); }}>
      {roomNumber}
    </div>
  );
}

export default Room;
