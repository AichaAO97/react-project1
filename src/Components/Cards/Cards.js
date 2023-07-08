import React from 'react';

import classes from './Cards.module.css';

function Cards(props) {
  return (
    <div className={classes.container}>
      {props.users.map((user) => (
        <div key={user.key} className={classes.card}>
          {user.userName} ({user.age} years old)
        </div>
      ))}
    </div>
  );
}

export default Cards;
