import React from 'react';

import BaseCard from '../../UI/BaseCard/BaseCard';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <BaseCard className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </BaseCard>
  );
};

export default UsersList;
