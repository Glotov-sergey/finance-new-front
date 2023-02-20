import React, { FC } from "react";

import styles from "./CapitalCard.module.css";

interface ICapitalCard {
  title: string;
  percent?: string;
  price?: string;
}

const CapitalCard: FC<ICapitalCard> = ({ title, price, percent }) => {
  return (
    <div className={styles.CapitalCard}>
      <h1>{title}</h1>
      <span>{percent}</span>
      <span className={styles.price}>{price}</span>
    </div>
  );
};

export default CapitalCard;
