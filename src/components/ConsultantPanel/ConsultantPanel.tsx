import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getConsultant } from "../../services/consultant";
import { setConsultant } from "../../store/slices/consultantSlice";
import ConsultantInfo from "../ConsultantInfo/ConsultantInfo";
import ConsultantUsers from "../ConsultantUsers/ConsultantUsers";
import CreateUser from "../CreateUser/CreateUser";

import styles from "./ConsultantPage.module.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const ConsultantPanel = () => {
  const params = useParams();

  const dispatch = useAppDispatch();

  const { id } = params;

  const { activeElement } = useAppSelector((state) => state.sidebarReducer);

  useEffect(() => {
    getConsultant(Number(id)).then((res) => {
      console.log(res);
      dispatch(setConsultant(res.data));
    });
  }, []); //  eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className={styles.consultantPanel}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        {activeElement === 0 ? (
          <ConsultantInfo />
        ) : activeElement === 1 ? (
          <CreateUser />
        ) : activeElement === 2 ? (
          <ConsultantUsers />
        ) : null}
      </div>
    </section>
  );
};

export default ConsultantPanel;
