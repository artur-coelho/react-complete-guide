import React, { useState } from 'react';

import BaseCard from '../../UI/BaseCard/BaseCard';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name or age (non-empty values)',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( >0 )',
      });
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

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={closeModalHandler}
        ></ErrorModal>
      )}
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
    </div>
  );
};

export default AddUser;
