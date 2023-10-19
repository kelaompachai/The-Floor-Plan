/* eslint-disable react/prop-types */
// a container for the app to pass state into

import React from 'react';
import Blueprint from './blueprint';
import Form from './form';
import RoomManifest from './roomManifest';

function Container(props) {
  const {
    displayBlue, showWing, rooms, displayRoomInfo, showRoomInfo, exitRoomInfo, completeTaskHandler,
  } = props;

  if (displayRoomInfo) {
    return (
      <RoomManifest
        displayRoomInfo={displayRoomInfo}
        exitRoomInfo={exitRoomInfo}
        completeTaskHandler={completeTaskHandler}
      />
    );
  }

  if (displayBlue) {
    return (
      <>
        <Form showWing={showWing} />
        <Blueprint rooms={rooms} showRoomInfo={showRoomInfo} />
      </>
    );
  }

  return (
    <Form showWing={showWing} />
  );
}

export default Container;
