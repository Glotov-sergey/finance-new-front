import React from "react";
import { nonSaving, Savings } from "../../assets";
import { useAppSelector } from "../../hooks/redux";
import CapitalCard from "../CapitalCard/CapitalCard";
import { OperationCard } from "../OperationCard/OperationCard";
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";

import styles from "./Scrore.module.css";
import LineGraph from "../LineGraph/LineGraph";

// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const Score = () => {
  const { user, accountNumber } = useAppSelector((state) => state.userReducer);
  return (
    <div className={styles.ScoreFull}>
      {/* <UpBar /> */}
      <div className={styles.scoreBlockList}>
        <div className={styles.leftBlock}>
          <div className={styles.checkGraph}>
            <h2>Счёт #{accountNumber}</h2>
            <div className={styles.checkPlus}>
              <span>+{user?.pl ? user.pl : 100 / 100}%</span>
              <h2>${user?.balance}</h2>
              <h4>Общая сумма счета</h4>
            </div>
          </div>
          <div className={styles.cardsCheckList}>
            <div className={styles.cardCheck}>
              <img src={Savings} alt="saving" />
              <div className={styles.cardCheckInfo}>
                <span>Цель на год</span>
                <h2>
                  $10.000<span>/$20.000</span>
                </h2>
                {/* <Line
                  percent={10}
                  strokeWidth={3}
                  trailWidth={3}
                  trailColor="#DDE0F1"
                  strokeColor="#FF7B31"
                /> */}
                <h3>
                  3% от общей суммы <span>+3%</span>
                </h3>
              </div>
            </div>
            <div className={styles.cardCheck}>
              <img src={nonSaving} alt="no-saving" />
              <div className={styles.cardCheckInfo}>
                <span>Цель на месяц</span>
                <h2>
                  $150<span>/$1000</span>
                </h2>
                {/* <Line
                  percent={50}
                  strokeWidth={3}
                  trailWidth={3}
                  trailColor="#DDE0F1"
                  strokeColor="#FF7B31"
                /> */}
                <h3>
                  3% от общей суммы <span>+3%</span>
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.checkStat}>
            <h1>
              <span>Транзакции</span>
              <span>Дата: за год</span>
              <span>Сумма: по убыванию</span>
            </h1>
            <div className={styles.tableCheck}>
              <div className={styles.tableRow}>
                <h2>Операция</h2>
                <div>
                  <h2>Время</h2>
                  <h2>Дата</h2>
                  <h2>Сумма</h2>
                </div>
              </div>
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
              <OperationCard
                title="test"
                time="22:30:33"
                date="27.10.2022"
                price="+$744"
              />
            </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.graphCapital}>
            <h1>График капитализации</h1>
            <div className={styles.capitalLine}>
              <span className={styles.select}>Инфо</span>
              <span>Статистика</span>
              <span>Общее</span>
            </div>
            <div className={styles.capitalStat}>
              <div className={styles.leftCapital}>
                <CapitalCard title="Прибыль" percent="+12.65%" />
                <CapitalCard title="Вся прибыль" percent="+12.65%" />
                <CapitalCard title="Ежедневно" price="0.20%" />
                <CapitalCard title="Ежемесячно" price="6.12%" />
              </div>
              <div className={styles.rightCapital}>
                <CapitalCard title="Средства" price="$301.50" />
                <CapitalCard title="Баланс" price="$301.50" />
                <CapitalCard title="Прибыль" price="$1,579.76" />
                <CapitalCard title="Депозиты" price="$12,558.60" />
                <CapitalCard title="Выводы средств" price="$301.50" />
              </div>
            </div>
          </div>
          <div className={styles.graphCapitalLine}>
            <h1>
              <span>График капитализации</span>
              <h2>За год 2022</h2>
            </h1>
            <LineGraph data={user.all_trades} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
