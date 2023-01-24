import React, { useState } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevState) => [user, ...prevState]);
  };

  return (
    <>
      <AddUser addUser={addUser} />
      <UsersList users={users} />
    </>
  );
}

export default App;
