import React, { useState } from 'react';

import BaseCard from '../../UI/BaseCard/BaseCard';
import Button from '../../UI/Button/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [isValid, setisValid] = useState(true);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setisValid(false);
      return;
    }
    if (+age < 1) {
      setisValid(false);
      return;
    }
    props.addUser({
      name: username,
      age: age,
      id: Math.random().toString() + age,
    });
    setUsername('');
    setAge('');
  };

  return (
    <BaseCard className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={usernameHandler}
        />
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' value={age} onChange={ageHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </BaseCard>
  );
};

export default AddUser;
