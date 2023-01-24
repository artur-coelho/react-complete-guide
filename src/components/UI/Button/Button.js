import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  return props.link ? (
    <a href={props.link} className={styles.button}>
      {props.children}
    </a>
  ) : (
    <button
      type={props.type || 'button'}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
