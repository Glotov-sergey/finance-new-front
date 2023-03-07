import React, { FC } from "react";

import styles from "./OperationCard.module.css";

interface IOperationCard {
  type: string;
  open_date: string;
  profit: string;
}

export const OperationCard: FC<IOperationCard> = ({
  type,
  open_date,
  profit,
}) => {
  return (
    <div className={styles.OperationCard}>
      <h1>{type}</h1>
      <div className={styles.OperationCardInfo}>
        <h2>{open_date.slice(10)}</h2>
        <h2>{open_date.slice(0, 10)}</h2>
        <span
          className={Math.sign(Number(profit)) === -1 ? `${styles.red}` : ""}
        >
          {profit}
        </span>
      </div>
    </div>
  );
};
