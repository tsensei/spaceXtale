import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage/HomePageLaunches.module.css";

const HomePageLaunches = ({ launchesPast }) => {
  const nPast = launchesPast.length;
  const nSuccess = launchesPast.filter((l) => l.success).length;
  const nEff = Math.round((nSuccess / nPast) * 100);
  return (
    <div className={styles.main + " bg-overlay"}>
      <div className={styles.launches__content}>
        <p>Launches</p>
        <p>Total Launches : {nPast}</p>
        <p>Successful Launches : {nSuccess}</p>
        <p>
          Revolutionizing space flight with an efficiency of {nEff}% since 2006
        </p>
        <Link to="/launches" className={styles.launches__button + " btn"}>
          Explore All Launches
        </Link>
      </div>
    </div>
  );
};

export default HomePageLaunches;
