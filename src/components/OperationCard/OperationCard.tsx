import React, { FC } from "react";

import styles from "./OperationCard.module.css";

interface IOperationCard {
  title: string;
  time: string;
  date: string;
  price: string;
}

export const OperationCard: FC<IOperationCard> = ({
  title,
  time,
  date,
  price,
}) => {
  return (
    <div className={styles.OperationCard}>
      <h1>{title}</h1>
      <div className={styles.OperationCardInfo}>
        <h2>{time}</h2>
        <h2>{date}</h2>
        <span>{price}</span>
      </div>
    </div>
  );
};
