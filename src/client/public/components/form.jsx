import React from 'react';

function Form(props) {
  const { showWing } = props;
  return (
    <>
      <input className="wing-input" type="text" />
      <button type="button" onClick={() => { showWing(document.querySelector('.wing-input').value); }}>View Wing</button>
    </>
  );
}

export default Form;
