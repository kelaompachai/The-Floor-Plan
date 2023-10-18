import React from 'react';

function Form(props) {
  const { showWing } = props;
  return (
    <>
      <input type="text" />
      <button type="button" onClick={() => { showWing(); }}>View Wing</button>
    </>
  );
}

export default Form;
