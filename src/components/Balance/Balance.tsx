import React, { MouseEventHandler } from "react";
import s from "./Balance.module.css";
import line from "../../assets/line.png";
import line2 from "../../assets/line-2.png";

const Balance = () => {

  const hMenu = [
    "Ticket",
    "Открытие сделки",
    "Тип",
    "Лот",
    "Закрытие седлки",
    "Сумма",
    "Коммиссия",
  ];

  const tmp = [
    {
      ticket: "111243",
      open: "22:30:33",
      type: "продажа",
      lot: "27.10.2022",
      close: "27.10.2022",
      sum: "5 575",
      tax: "27.10.2022",
    },
    {
      ticket: "111243",
      open: "22:30:33",
      type: "продажа",
      lot: "27.10.2022",
      close: "27.10.2022",
      sum: "5 575",
      tax: "27.10.2022",
    },
    {
      ticket: "111243",
      open: "22:30:33",
      type: "продажа",
      lot: "27.10.2022",
      close: "27.10.2022",
      sum: "5 575",
      tax: "27.10.2022",
    },
    {
      ticket: "111243",
      open: "22:30:33",
      type: "продажа",
      lot: "27.10.2022",
      close: "27.10.2022",
      sum: "5 575",
      tax: "27.10.2022",
    },
    {
      ticket: "111243",
      open: "22:30:33",
      type: "продажа",
      lot: "27.10.2022",
      close: "27.10.2022",
      sum: "5 575",
      tax: "27.10.2022",
    },
    {
      ticket: "111243",
      open: "22:30:33",
      type: "продажа",
      lot: "27.10.2022",
      close: "27.10.2022",
      sum: "5 575",
      tax: "27.10.2022",
    },
    {
      ticket: "111243",
      open: "22:30:33",
      type: "продажа",
      lot: "27.10.2022",
      close: "27.10.2022",
      sum: "5 575",
      tax: "27.10.2022",
    },
  ];

  const handleClick = (event:any) => {
    return tmp.filter(el => el.ticket == event.target.value || '')
  }

  return (
    <div className={s.bl__wrapper}>
      <div className={s.bl__total}>
        <p className={s.bl__title}>Всего заработано</p>
        <p className={s.bl__price}>
          $5 562 <span>+2,5%</span>
        </p>
        <img className={s.line} src={line} alt="line" />
      </div>
      <div className={s.bl__total_month}>
        <p className={s.bl__title}>За месяц</p>
        <p className={s.bl__month}>
          $434 <span>-2,5%</span>
        </p>
        <img className={s.line2} src={line2} alt="line2" />
      </div>
      <div className={s.bl__graph}>
        <select name="" id="">
          <option value="За год">За год</option>
        </select>
        <p>Тут будет график</p>
      </div>
      <div className={s.bl__history}>
        <p className={s.historyTitle}>История сделок</p>

        <div className={s.historyMenu}>
          {hMenu.map((el) => (
            <p key={el}>{el}</p>
          ))}
        </div>
        {tmp.map((el) => (
          <div className={s.historyMenu}>
            <p>{el.ticket}</p>
            <p>{el.open}</p>
            <p>{el.type}</p>
            <p>{el.lot}</p>
            <p>{el.close}</p>
            <p>{el.sum}</p>
            <p>{el.tax}</p>
          </div>
        ))}
      </div>
      <div>
        <input className={s.input} type="text" placeholder="Поиск" onClick={handleClick}/>
      </div>
    </div>
  );
};

export default Balance;
