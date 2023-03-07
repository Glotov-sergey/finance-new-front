import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

import styles from "./CreateConsultant.module.css";

const Sucsess = () => {
  const { consultant } = useAppSelector((state) => state.adminReducer);

  return (
    <section className={styles.success}>
      <div>
        <h1>Данные для входа консультанта:</h1>
        <h3 className={styles.email}>
          <span>Почта:</span> {consultant?.email}
        </h3>
        <h3 className={styles.access}>
          <span>Код доступа</span> {consultant?.accessCode}
        </h3>
        <button>Отправить код на почту консультанта</button>
        <Link to="/admin">Вернуться к админ панели</Link>
      </div>
    </section>
  );
};

export default Sucsess;
