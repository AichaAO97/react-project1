import React from 'react';
import { useState } from 'react';
import classes from './ErrorModal.module.css';
import Button from '../Button/Button';

function ErrorModal(props) {
  let message;
  if (props.error === 'no-input') {
    message = 'Please enter a valid name and age (non-empty values)';
  } else if (props.error === 'invalid-age') {
    message = 'Please enter a valid age ( > 0)';
  }

  const hideModal = () => {
    props.displayHandler('none');
  };

  return (
    <div
      style={{ display: props.display }}
      onClick={hideModal}
      className={classes['modal-box']}
    >
      <div className={classes.modal}>
        <h1 className={classes.header}> Invalid Input</h1>

        <p className={classes.message}> {message} </p>
        <div className={classes.button}>
          <Button onClick={hideModal} text="Okay" />
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
