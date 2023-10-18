import React, { useState } from 'react';
import Blueprint from './components/blueprint';
import Form from './components/form';
import Container from './components/container';


function App() {
  const [displayBlue, setDisplayBlue] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [displayRoomInfo, setDisplayRoomInfo] = useState(false);

  const showWing = (e) => {
    fetch('/data')
      .then((data) => data.json())
      .then((data) => {
        setRooms(data);
        setDisplayBlue(true);
      })
      .catch((err) => console.log(err));
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
    />
  );
}

export default App;
