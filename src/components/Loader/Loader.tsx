import React, { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsdualring}></div>
    </div>
  );
};

export default Loader;
