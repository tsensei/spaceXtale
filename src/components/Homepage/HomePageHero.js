import React from "react";
import styles from "../../styles/Homepage/HomePageHero.module.css";

import CountDown from "../CountDown";

const HomePageHero = ({ upcomingLaunch }) => (
  <div className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.heroContent__header}>
        Next Launch : <span>{upcomingLaunch.name}</span>
      </div>
      <div className={styles.heroContent__countdown}>
        <CountDown target={upcomingLaunch.date_unix} />
      </div>
    </div>
  </div>
);

export default HomePageHero;
