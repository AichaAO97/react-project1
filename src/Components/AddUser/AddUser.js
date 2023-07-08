import React from 'react';
import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from './../Button/Button';
import ErrorModal from './../ErrorModal/ErrorModal';

function AddUser(props) {
  const [userInput, setUserInput] = useState({ key: 0, userName: '', age: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();

    if (!userInput.userName && !userInput.age) {
      setErrorMessage('no-input');
    } else if (userInput.age < 0) {
      setErrorMessage('invalid-age');
    } else {
      setErrorMessage('');
      setUserInput((prevUser) => {
        return {
          ...prevUser,
          key: +prevUser['key'] + 1,
        };
      });
      props.updateFunction(userInput);
    }
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevUser) => {
      return {
        ...prevUser,
        [input]: value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <p>
          <label className={classes.label}> Username</label>
          <input
            onChange={(event) => {
              inputChangeHandler('userName', event.target.value);
            }}
            type="text"
            value={userInput['userName']}
          />
        </p>
        <p>
          <label className={classes.label}>Age (Years)</label>
          <input
            onChange={(event) => {
              inputChangeHandler('age', event.target.value);
            }}
            value={userInput['age']}
            type="number"
          />
        </p>

        <Button text="Add User" />
      </form>

      {errorMessage && <ErrorModal error={errorMessage} />}
    </div>
  );
}

export default AddUser;
