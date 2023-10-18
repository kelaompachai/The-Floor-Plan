import React, { useState } from 'react';
import Blueprint from './components/blueprint';
import Form from './components/form';
import Container from './components/container';


function App() {
  const [displayBlue, setDisplayBlue] = useState(false);
  const [rooms, setRooms] = useState([]);

  const showWing = (e) => {
    // console.log('cheese');
    fetch('/data')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setRooms(data);
        setDisplayBlue(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container showWing={showWing} displayBlue={displayBlue} rooms={rooms} />
  );
}

export default App;
