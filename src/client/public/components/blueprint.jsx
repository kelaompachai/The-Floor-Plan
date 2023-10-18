/* eslint-disable react/prop-types */
// write component that will manifest as the blueprint

import React from 'react';
import Room from './room';

function Blueprint(props) {
  const { rooms } = props;

  const roomsList = [];
  for (let i = 0; i < rooms.length; i += 1) {
    roomsList.push(
      <Room roomNumber={rooms[i].roomnumber} roomStatus={rooms[i].task} key={`room: ${i}`} />,
    );
  }

  return (
    <div className="blueprint">
      <div className="hallway" />
      {roomsList}
    </div>
  );
}

export default Blueprint;
