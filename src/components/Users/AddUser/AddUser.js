import React, { useState, useRef } from 'react';
import Wrapper from '../../Helpers/Wrapper';

import BaseCard from '../../UI/BaseCard/BaseCard';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name or age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( >0 )',
      });
      return;
    }
    props.addUser({
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString() + enteredAge,
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input type='text' id='username' ref={nameInputRef} />
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </BaseCard>
    </Wrapper>
  );
};

export default AddUser;
