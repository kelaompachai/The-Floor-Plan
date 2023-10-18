/* eslint-disable react/prop-types */
// a container for the app to pass state into

import React from 'react';
import Blueprint from './blueprint';
import Form from './form';

function Container(props) {
  const { displayBlue, showWing, rooms } = props;

  if (displayBlue) {
    return (
      <>
        <Form showWing={showWing} />
        <Blueprint rooms={rooms} />
      </>
    );
  }

  return (
    <Form showWing={showWing} />
  );
}

export default Container;
