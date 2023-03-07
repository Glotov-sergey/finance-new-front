import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { createConsultant } from "../../services/consultant";
import { updateLatestConsultant } from "../../store/slices/adminSlice";
import Loader from "../Loader/Loader";

import styles from "./CreateConsultant.module.css";
import Sucsess from "./Sucsess";

const CreateConsultant: FC = () => {
  const { register, handleSubmit, formState: err } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  // Проверка на законченность создания, чтобы вывести данные консультанта <Success отдает нужные дынне для входа />
  const [isDone, setIsDone] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await createConsultant(data).then((res) => {
      dispatch(updateLatestConsultant(res.data));
      setIsLoading(false);
      setIsDone(true);
    });
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isDone ? (
        <Sucsess />
      ) : (
        <section className={styles.create}>
          <h1>Создание консультанта</h1>
          <Link to="/admin">Вернуться к панели администратора</Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputBlock}>
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="test@gmail.com"
              />
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="level">
                Уровень в системе <span>(по умолчанию - 1)</span>
              </label>
              <input
                {...register("level", { setValueAs: (v) => Number(v) })}
                type="number"
                id="level"
                placeholder="12"
              />
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="name">Имя</label>
              <input
                {...register("name", { required: "Обязательное поле" })}
                type="text"
                id="name"
                placeholder="Василий"
              />
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="lastName">Отчество и фамилия</label>
              <input
                {...register("lastName", { required: "Обязательное поле" })}
                type="text"
                id="lastName"
                placeholder="Сергеевич Сидоров"
              />
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="surname">Отчество и фамилия</label>
              <input
                {...register("surname", { required: "Обязательное поле" })}
                type="text"
                id="surname"
                placeholder="Сергеевич Сидоров"
              />
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="activeAccount">Активный счет</label>
              <input
                {...register("activeAccount", { setValueAs: (v) => Number(v) })}
                type="number"
                id="activeAccount"
                placeholder="88888888"
              />
            </div>
            <button type="submit">Создать консультанта</button>
          </form>
        </section>
      )}
    </>
  );
};

export default CreateConsultant;
