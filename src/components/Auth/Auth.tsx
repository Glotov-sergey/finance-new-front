import React, { useState } from "react";
import { logo } from "../../assets";
import styles from "./Auth.module.css";

import { useForm } from "react-hook-form";
import { getUserInfo } from "../../services/user";
import { useAppDispatch } from "../../hooks/redux";
import { setAccount, setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader/Lodaer";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: err } = useForm();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    dispatch(setAccount(data.name));
    await getUserInfo(data)
      .then((res) => {
        dispatch(setUser(res.data));
        setIsLoading(false);
        navigate("/score");
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        navigate("/");
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.AuthFull}>
          <div className={styles.AuthBlock}>
            <div className={styles.LeftBlock}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <span>Название</span>
                <input
                  {...register("name", {
                    required: "Поле обязательно для заполнения",
                  })}
                  placeholder="8888888"
                  type="text"
                  id="name"
                />
                <span>Брокер</span>
                <input
                  {...register("broker", {
                    required: "Поле обязательно для заполнения",
                  })}
                  placeholder="Tickmill"
                  id="broker"
                  type="text"
                />
                <span>Номер счета</span>
                <input
                  {...register("account", { value: null })}
                  placeholder="8888888"
                  id="accountNumber"
                  type="text"
                />
                <span>Пароль инвестора</span>
                <input
                  {...register("investor_password", {
                    required: "Поле обязательно для заполнения",
                  })}
                  placeholder="..."
                  id="investor_password"
                  type="password"
                />
                <span>Сервер</span>
                <input
                  {...register("serv", {
                    required: "Поле обязательно для заполнения",
                  })}
                  placeholder="..."
                  id="server"
                  type="text"
                />
                <button type="submit" className={styles.btn}>
                  Войти
                </button>
              </form>
            </div>
            <div className={styles.rightBlock}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
