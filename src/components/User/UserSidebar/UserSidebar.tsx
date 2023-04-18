import React, { FC } from "react";
import { logoSm, account, history, chat, notificationSvg, settings} from "../../../assets/index";
import s from "./UserSidebar.module.css";

interface Item {
  page: number,
  title: string;
  image: string;
}

interface Props {
  setActivePage: (page:number) => void;
}


const UserSidebar:FC<Props> = ({setActivePage}) => {
  const data: Item[] = [
    {
      page: 1,
      title: "Счета",
      image: account,
    },
    {
      page: 2,
      title: "История сделок",
      image: history,
    },
    {
      page: 3,
      title: "Чат поддержки",
      image: chat,
    },
    {
      page: 4,
      title: 'Уведомления',
      image: notificationSvg,
    },
    {
      page: 5,
      title: 'Настройки',
      image: settings,
    }
  ];

  return (
    <aside className={s.sidebar}>
      <div className={s.sidebar__logo}>
        <img src={logoSm} alt="лого" width={94} height={41} />
      </div>
      <ul className={s.menu}>
        {data.map(({page, title, image }) => (
          <div key={title} className={s.menu__item} onClick={() => setActivePage(page)}>
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
