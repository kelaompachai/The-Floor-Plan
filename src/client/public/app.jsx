import React, { useState } from 'react';
import Container from './components/container';


function App() {
  const [displayBlue, setDisplayBlue] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [displayRoomInfo, setDisplayRoomInfo] = useState(false);

  const showWing = (wing) => {
    fetch(`/data/${wing}`)
    // fetch('/data')
      .then((data) => data.json())
      .then((data) => {
        setRooms(data);
        setDisplayBlue(true);
      })
      .catch((err) => console.log(err));
  };

  const completeTaskHandler = (task) => {
    fetch('/data', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomNumber: displayRoomInfo.roomnumber,
        newStatus: task,
        wing: displayRoomInfo.wing,
      }),
    })
      .then((data) => {
        // make a shallow copy of rooms
        const newRooms = rooms.slice();
        for (let i = 0; i < newRooms.length; i += 1) {
          // iterate through the shallow copy to find the room that
          // matches the display room info room
          // change the status on that room to 'done'
          if (newRooms[i].roomnumber === displayRoomInfo.roomnumber) {
            newRooms[i].task = task;
            break;
          }
        }
        // setRooms with the modified shallow copy of rooms
        setRooms(newRooms);
        // set displayRoomInfo so its status is 'done'
        setDisplayRoomInfo({
          ...displayRoomInfo,
          task,
        });
      })
      .catch((err) => console.log('err: ', err));
  };

  const showRoomInfo = (room) => {
    for (let i = 0; i < rooms.length; i += 1) {
      if (rooms[i].roomnumber === room) setDisplayRoomInfo(rooms[i]);
    }
  };

  const exitRoomInfo = (e) => {
    setDisplayRoomInfo(false);
  };

  return (
    <Container
      showWing={showWing}
      displayBlue={displayBlue}
      rooms={rooms}
      displayRoomInfo={displayRoomInfo}
      showRoomInfo={showRoomInfo}
      exitRoomInfo={exitRoomInfo}
      completeTaskHandler={completeTaskHandler}
    />
  );
}

export default App;
