import React, { useState } from "react";
import {
  searchSvg,
  upArrowSvg,
  notificationSvg,
  avatarImage,
} from "../../../assets/index";
import s from "./UserNavbar.module.css";
import { useAppSelector } from "../../../hooks/redux";

const UserNavbar = () => {
  const [isNotifications, setIsNotifications] = useState(true);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [userIsOpen, setUserIsOpen] = useState(false);

  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <div className={s.navbar}>
      <label className={s.search}>
        <input type="text" placeholder="Поиск" />
        <img src={searchSvg} alt="Поиск" />
      </label>
      <div onClick={() => setInfoIsOpen((p) => !p)}>
        <div className={s.info}>
          <p>
            Активный счет: <span>#</span>
          </p>
          <p className={s.broker}>Robo Forex</p>
          <img
            className={infoIsOpen ? `${s.infoImage}` : ""}
            src={upArrowSvg}
            alt="стрелка"
          />
        </div>
        {infoIsOpen && (
          <>
            <div className={s.info}>
              <p>
                Активный счет: <span>#</span>
              </p>
              <p className={s.broker}>Robo Forex</p>
            </div>
            <div className={s.info}>
              <p>
                Активный счет: <span>#</span>
              </p>
              <p className={s.broker}>Robo Forex</p>
            </div>
          </>
        )}
      </div>
      <div className={s.notifications}>
        <img
          className={isNotifications ? `${s.notificationsDot}` : ""}
          src={notificationSvg}
          alt="уведомления"
        />
      </div>
      <div onClick={() => setUserIsOpen((p) => !p)}>
        <div className={s.user}>
          <div className={s.userInfo}>
            <img src={avatarImage} alt="аватар" width={32} height={32}/>
            <h4>{user.name}</h4>
          </div>
          <img
            className={userIsOpen ? `${s.infoImage}` : ""}
            src={upArrowSvg}
            alt="стрелка"
          />
        </div>
        {userIsOpen && (
          <div>
            <p>Настройки</p>
            <p>Аккаунт</p>
            <p>Выход</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNavbar;
