import React, { useState } from "react";
import { logoSm } from "../../../assets";
import { useAppDispatch } from "../../../hooks/redux";

import { setActiveElement } from "../../../store/slices/sidebar";

import styles from "./Sidebar.module.css";

const menuData: string[] = [
  "Статистика",
  "Добавить пользователя",
  "Список моих пользователей",
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useAppDispatch();

  const handleClickItem = (index: number): void => {
    setActiveIndex(index);
    dispatch(setActiveElement(index));
  };

  return (
    <aside className={styles.aside}>
      <img src={logoSm} alt="Club consulting" />
      <ul className={styles.navigation}>
        {menuData.map((item, index) => (
          <li
            className={activeIndex === index ? `${styles.active}` : ""}
            key={item}
            onClick={() => handleClickItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
