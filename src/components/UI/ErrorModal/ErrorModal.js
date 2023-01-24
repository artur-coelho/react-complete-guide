import React from 'react';

import BaseCard from '../BaseCard/BaseCard';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal} />
      <BaseCard className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>Okay</Button>
        </footer>
      </BaseCard>
    </div>
  );
};

export default ErrorModal;
