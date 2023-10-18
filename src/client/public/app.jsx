import React, { useState } from 'react';
import Blueprint from './components/blueprint';
import Form from './components/form';

function App() {
  const [displayBlue, setDisplayBlue] = useState(false);

  const blueArray = [];

  const showWing = (e) => {
    // console.log('cheese');
    fetch('/data')
      .then((data) => data.json())
      .then((data) => {
        setDisplayBlue(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form showWing={showWing} />
      <Blueprint displayBlue={displayBlue} />
    </>
  );
}

export default App;
