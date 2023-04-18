import React from "react";
import s from "./Settings.module.css";
import avatar from "../../assets/avatar.png";
import roboF from '../../assets/roboforex.png';
import tickM from '../../assets/tickmill.png';

const Settings = () => {
  const tmp = [
    {
      id: "#611232123",
      balance: "$2 451",
      broker: "Robo Forex",
    },
    {
      id: "#611232124",
      balance: "$12 562",
      broker: "Tickmill",
    },
    {
      id: "#611232125",
      balance: "$9 567",
      broker: "Robo Forex",
    },
    {
      id: "#611232126",
      balance: "$13 495",
      broker: "Tickmill",
    },
  ];
  return (
    <div className={s.settings}>
      <div>
        <div className={s.profile}>
          <div>
            <img src={avatar} alt="avatar" width={124} height={124} />
          </div>
          <div>
            <p className={s.lastName}>Иванов</p>
            <p className={s.name}>Иван Иванович</p>
          </div>
        </div>
        <div className={s.form}>
          <div className={s.form__wrapper}>
            <label className={s.form__label}>
              Фамилия
              <input className={s.form__input} type="text" value="Иванов" />
            </label>
            <label className={s.form__label}>
              Email
              <input
                className={s.form__input}
                type="email"
                value="1234@gmail.com"
              />
            </label>
            <label className={s.form__label}>
              Имя
              <input className={s.form__input} type="text" value="Иван" />
            </label>
            <label className={s.form__label}>
              Телефон
              <input
                className={s.form__input}
                type="tel"
                value="+7 999 138 94 19"
              />
            </label>
            <label className={s.form__label}>
              Отчество
              <input className={s.form__input} type="text" value="Иванович" />
            </label>
          </div>
          <button className={s.form__btn}>Сохранить</button>
        </div>
      </div>
      <div>
        {tmp.map((el) => (
          <div key={el.id} className={s.count}>
            <div className={s.count__topRow}>
              <p className={s.count__text}>
                Мой счет <span className={s.count__id}>{el.id}</span>
              </p>
              {
                el.broker === 'Robo Forex' ? (
                    <img className={s.count__img} src={roboF} alt="robo forex" width={124} height={46}/>
                ) :
                (
                    <img className={s.count__img} src={tickM} alt="robo forex" width={124} height={46}/>
                )
              }
              
              <p className={s.count__text}>
                Брокер <span className={s.count__broker}>{el.broker}</span>
              </p>
            </div>
            <p className={s.count__balance}>{el.balance}</p>
            <button className={s.count__btn}>Редактировать</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
