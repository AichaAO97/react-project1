import React from 'react';

import classes from './AddUser.module.css';
import Button from './../Button/Button';
function AddUser() {
  return (
    <form className={classes.form}>
      <p>
        <label className={classes.label}> Username</label>
        <input type="text" />
      </p>
      <p>
        <label className={classes.label}>Age (Years)</label>
        <input type="number" />
      </p>

      <Button text="Add User" />
    </form>
  );
}

export default AddUser;
