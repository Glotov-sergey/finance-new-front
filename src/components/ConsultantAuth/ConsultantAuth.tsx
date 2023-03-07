import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginConsultant } from "../../services/consultant";
import Loader from "../Loader/Loader";

import styles from "./ConsultantAuth.module.css";

const ConsultantAuth = () => {
  const { register, handleSubmit, formState: err } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    loginConsultant(data)
      .then((res) => {
        setIsLoading(false);
        navigate(`/consultant/${res.data.id}`);
      })
      .catch((e) => console.log(e));
  };

  return (
    <section className={styles.consultant}>
      {isLoading ? <Loader /> : null}
      <div className={styles.container}>
        <h1>Вход для сотрудника</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBlock}>
            <label htmlFor="email">Ваш email</label>
            <input
              {...register("email", {
                required: "Поле обязательно для заполнения",
              })}
              type="email"
              id="email"
              name="email"
              placeholder="test@test.ru"
            />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="accessCode">Персональный код доступа</label>
            <input
              {...register("accessCode", {
                required: "Поле обязательно для заполнения",
              })}
              type="password"
              id="accessCode"
              name="accessCode"
              placeholder="******"
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    </section>
  );
};

export default ConsultantAuth;
