// thing that pops up when a room is clicked

import React from 'react';

function RoomManifest(props) {
  const { displayRoomInfo, exitRoomInfo, completeTaskHandler } = props;

  return (
    <>
      <div className="manifestDiv">
        <p>{`Room Number: ${displayRoomInfo.roomnumber}`}</p>
        <p>{`Status: ${displayRoomInfo.task}`}</p>
        <svg onClick={() => exitRoomInfo()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="x" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <button type="button" onClick={() => completeTaskHandler('done')}>Complete Task</button>
      <div className="dropdown">
        <p className="drop-button">Add Task:</p>
        <div className="dropdown-content">
          <button type="button" className="drop-options" onClick={() => completeTaskHandler('strip')}>Strip</button>
          <button type="button" className="drop-options" onClick={() => completeTaskHandler('scrub')}>Scrub</button>
          <button type="button" className="drop-options" onClick={() => completeTaskHandler('burnish')}>Burnish</button>
        </div>
      </div>
    </>
  );
}

export default RoomManifest;
