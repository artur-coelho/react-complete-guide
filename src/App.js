import React, { useState } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevState) => [user, ...prevState]);
    console.log(users);
  };

  return (
    <div>
      <AddUser addUser={addUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
