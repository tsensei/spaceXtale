import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage/HomePageLaunches.module.css";

const HomePageLaunches = ({ launchesPast }) => {
  const nPast = launchesPast.length;
  const nSuccess = launchesPast.filter((l) => l.success).length;
  const nEff = Math.round((nSuccess / nPast) * 100);
  return (
    <div className={styles.main + " bg-overlay"}>
      <div className="homepage__content">
        <p className="homepage__header">Launches</p>
        <p className="homepage__subheader">Total Launches : {nPast}</p>
        <p className="homepage__subheader">Successful Launches : {nSuccess}</p>
        <p className="homepage__subtitle">
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
