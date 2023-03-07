import React, { useState } from "react";
import {
  avatarImage,
  notificationSvg,
  searchSvg,
  upArrowSvg,
} from "../../../assets";
import { useAppSelector } from "../../../hooks/redux";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isNotifications, setIsNotifications] = useState(true);

  const { consultant } = useAppSelector((state) => state.consultantReducer);

  return (
    <section className={styles.navbar}>
      <div className={styles.search}>
        <input type="text" placeholder="Поиск" />
        <img src={searchSvg} alt="Поиск" />
      </div>
      <div className={styles.info}>
        <p>
          Активный счет: <span>#{consultant.activeAccount}</span>
        </p>
        <p className={styles.broker}>Robo Forex</p>
        <img src={upArrowSvg} alt="стрелка" />
      </div>
      <div className={styles.notifications}>
        <img
          className={isNotifications ? `${styles.notificationsDot}` : ""}
          src={notificationSvg}
          alt="уведомления"
        />
      </div>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <img src={avatarImage} alt="аватар" />
          <h4>{consultant.name}</h4>
        </div>
        <img src={upArrowSvg} alt="стрелка" />
      </div>
    </section>
  );
};

export default Navbar;
