import React from "react";
import { selectImage } from "../../assets";
import { useAppSelector } from "../../hooks/redux";

import styles from "./ConsultantInfo.module.css";

const ConsultantInfo = () => {
  const { consultant } = useAppSelector((state) => state.consultantReducer);

  return (
    <div className={styles.consultantBlock}>
      <div className={styles.consultantBlockTop}>
        <div className={styles.consultantInfo}>
          <div className={styles.photoLoader}>
            <input type="file" id="photo" name="photo" />
            <label htmlFor="photo" className={styles.mock}>
              <img src={selectImage} alt="превью" />
              <p>Загрузить фото</p>
            </label>
          </div>
          <div className={styles.anotherInfo}>
            <div className={styles.top}>
              <div>
                <p>Имя руководителя</p>
                <h5>{consultant.masterName}</h5>
              </div>
              <p className={styles.level}>Уровень: {consultant.level}</p>
            </div>
            <div className={styles.naming}>
              <h2>{consultant.lastName}</h2>
              <h3>
                {consultant.name} {consultant.surname}
              </h3>
            </div>
            <div className={styles.consultantConsultants}>
              <p>Количество сотрудников в структуре</p>
              <b>{consultant.ownConsultants} сотрудников</b>
            </div>
          </div>
        </div>
        <div className={styles.totalEarnings}>
          <p className={styles.label}>Заработано за все время работы</p>
          <h4>{consultant.ownEarnings + consultant.structureEarnings}$</h4>
          <div className={styles.earnings}>
            <div className={styles.earnignsItem}>
              <p>Личные</p>
              <b>{consultant.ownEarnings}$</b>
            </div>
            <div className={styles.earnignsItem}>
              <p>Структурные</p>
              <b>{consultant.structureEarnings}$</b>
            </div>
            <div className={styles.earnignsItem}>
              <p>Общий объем</p>
              <b>{consultant.ownEarnings + consultant.structureEarnings}$</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.consultantBlockBottom}>
        <div className={styles.monthly}>
          {consultant.ownEarnings === 0 ? (
            <p>У вас пока нет заработка</p>
          ) : null}
        </div>
        <div className={styles.career}>
          {consultant.ownEarnings === 0 ? (
            <p>
              Вы только начинаете свой путь в нашей компании! Проявляйте свои
              лучшие качества и сможете вырасти!
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ConsultantInfo;
