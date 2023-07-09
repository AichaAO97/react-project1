import React from 'react';
import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from './../Button/Button';
import ErrorModal from './../ErrorModal/ErrorModal';

function AddUser(props) {
  const [userInput, setUserInput] = useState({ key: 0, userName: '', age: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [display, setDisplay] = useState('');

  const displayErrorHandler = (state) => {
    setDisplay(state);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!userInput.userName && !userInput.age) {
      setErrorMessage('no-input');
      setDisplay('block');
    } else if (userInput.age < 0) {
      setErrorMessage('invalid-age');
      setDisplay('block');
    } else {
      setErrorMessage('');
      setUserInput((prevUser) => {
        return {
          ...prevUser,
          key: +prevUser['key'] + 1,
        };
      });
      props.updateFunction(userInput);
      setUserInput((prevUser) => {
        return {
          userName: '',
          age: '',
          key: +prevUser['key'],
        };
      });
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
          <label htmlFor="userName" className={classes.label}>
            Username
          </label>
          <input
            id="userName"
            onChange={(event) => {
              inputChangeHandler('userName', event.target.value);
            }}
            type="text"
            value={userInput['userName']}
          />
        </p>
        <p>
          <label htmlFor="age" className={classes.label}>
            Age (Years)
          </label>
          <input
            id="age"
            onChange={(event) => {
              inputChangeHandler('age', event.target.value);
            }}
            value={userInput['age']}
            type="number"
          />
        </p>

        <Button type="submit" text="Add User" />
      </form>

      {errorMessage && (
        <ErrorModal
          displayHandler={displayErrorHandler}
          display={display}
          error={errorMessage}
        />
      )}
    </div>
  );
}

export default AddUser;
