import React from 'react';

import BaseCard from '../../UI/BaseCard/BaseCard';
import Button from '../../UI/Button/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <BaseCard className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='age'>Age</label>
        <input type='text' id='age' />
        <Button type='submit'>Add User</Button>
      </form>
    </BaseCard>
  );
};

export default AddUser;
