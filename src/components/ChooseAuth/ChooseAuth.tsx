import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

import styles from "./ChooseAuth.module.css";

const ChooseAuth = () => {
  return (
    <section className={styles.chooseAuth}>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <h1>Войти как</h1>
        <Link to="/auth">Клиент</Link>
        <Link to="/consultant-auth">Сотрудник</Link>
      </div>
    </section>
  );
};

export default ChooseAuth;
