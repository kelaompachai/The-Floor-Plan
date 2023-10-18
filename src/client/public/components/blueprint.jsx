// write component that will manifest as the blueprint

import React from 'react';

function Blueprint(props) {
  const { displayBlue } = props;
  const blue = [];
  if (displayBlue) {
    blue.push(<Fun />);
  }

  return (
    <div>
      {blue}
    </div>
  );
}

function Fun() {
  return (
    <p>Hello World.</p>
  );
}

export default Blueprint;
