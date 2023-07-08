import React from 'react';
import { useState } from 'react';

import AddUser from './Components/AddUser/AddUser';
import Cards from './Components/Cards/Cards';

const usersData = [];

function App() {
  const [newUser, setNewUser] = useState(null);

  const updateUsersHandler = (user) => {
    setNewUser(user);
    console.log('newUser:', user);
  };

  if (newUser) {
    usersData.push(newUser);
    console.log('usersData:', usersData);
  }

  return (
    <div>
      <AddUser updateFunction={updateUsersHandler} />
      {newUser && <Cards users={usersData} />}
    </div>
  );
}

export default App;
