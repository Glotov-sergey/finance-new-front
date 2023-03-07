import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../hooks/redux";
import { createUser } from "../../services/consultant";
import Loader from "../Loader/Loader";

import styles from "./CreateUser.module.css";

const CreateUser = () => {
  const { register, handleSubmit, formState: err } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [selectedBlockValue, setSelectedBlockValue] = useState("");
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const selectBlockItems = ["Tickmill", "Forex4you", "IC Markets"];

  const { id } = useAppSelector((state) => state.consultantReducer.consultant);

  const handleClickSelect = (value: string) => {
    setSelectedBlockValue(value);
    setIsOpenSelect(false);
  };

  const onSubmit = (data: any) => {
    setIsLoading(true);
    createUser(id, data)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.createUserForm}>
      {isLoading ? <Loader /> : null}
      <div className={styles.inputBlock}>
        <label htmlFor="username">Имя пользователя</label>
        <input
          {...register("username")}
          type="text"
          id="username"
          name="username"
          placeholder="Василий"
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="lastName">Фамилия пользователя</label>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Пупкин"
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="surname">Отчество пользователя</label>
        <input
          {...register("surname")}
          type="text"
          id="surname"
          name="surname"
          placeholder="Сергеевич"
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="name">Название</label>
        <input
          {...register("name")}
          type="text"
          id="name"
          name="name"
          placeholder="88888888"
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="broker">Брокер</label>
        <input
          {...register("broker")}
          onClick={() => setIsOpenSelect(true)}
          type="text"
          id="broker"
          name="broker"
          placeholder="Tickmill"
          value={selectedBlockValue}
        />
        <ul className={styles.selectBlock}>
          {isOpenSelect
            ? selectBlockItems.map((item) => (
                <li onClick={() => handleClickSelect(item)} key={item}>
                  {item}
                </li>
              ))
            : null}
        </ul>
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="investor_password">Пароль инвестора</label>
        <input
          {...register("investorPassword")}
          type="password"
          id="investorPassword"
          name="investorPassword"
          placeholder="************"
        />
      </div>
      <button type="submit">Создать</button>
    </form>
  );
};

export default CreateUser;
