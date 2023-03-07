import React from "react";
import { useAppSelector } from "../../hooks/redux";

import styles from "./ConsultantUsers.module.css";

const ConsultantUsers = () => {
  const { users } = useAppSelector(
    (state) => state.consultantReducer.consultant
  );
  return (
    <ul className={styles.usersList}>
      {users?.map((user) => (
        <li className={styles.usersItem} key={user.id}>
          <div>
            <p>ФИО:</p>
            <b>
              {user.username} {user.lastName}
            </b>
          </div>

          <div>
            <p>Брокер:</p>
            <b>{user.broker}</b>
          </div>
          <div>
            <p>Номер счета:</p>
            <b>{user.name}</b>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ConsultantUsers;
