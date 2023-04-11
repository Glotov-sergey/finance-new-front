import React from "react";
import { logoSm, account, history, chat} from "../../../assets/index";
import s from "./UserSidebar.module.css";

interface Item {
  title: string;
  image: string;
}

//TODO: поменять цвет иконок меню при наведении

const UserSidebar = () => {
  const data: Item[] = [
    {
      title: "Счета",
      image: account,
    },
    {
      title: "История сделок",
      image: history,
    },
    {
      title: "Чат поддержки",
      image: chat,
    },
  ];

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebar__logo}>
        <img src={logoSm} alt="лого" width={94} height={41} />
      </div>
      <ul className={s.menu}>
        {data.map(({ title, image }) => (
          <div key={title} className={s.menu__item}>
            <img className={s.menu__image} src={image} alt={title} />
            <li>{title}</li>
          </div>
        ))}
      </ul>
      {/* <button className={s.sidebar__btn}>
        Скачать 
        <img src={download} alt='скачать' />
      </button> */}
    </aside>
  );
};

export default UserSidebar;
