import React, { FC } from "react";
import { Link } from "react-router-dom";
import { consultantSvg, userSvg } from "../../assets";

import styles from "./Admin.module.css";

const Admin: FC = () => {
  return (
    <section className={styles.admin}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.column}>
            <Link to="/" className={styles.card}>
              <img src={userSvg} alt="пользователь" />
              <h5>Создать пользователя</h5>
            </Link>
            <div className={styles.card}>
              <img src={userSvg} alt="пользователь" />
              <h5>Получить информацию о пользователе</h5>
            </div>
          </div>
          <div className={styles.column}>
            <Link to="/create-consultant" className={styles.card}>
              <img src={consultantSvg} alt="консультант" />
              <h5>Создать консультанта</h5>
            </Link>
            <div className={styles.card}>
              <img src={consultantSvg} alt="консультант" />
              <h5>Получить информацию о консультанте</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
