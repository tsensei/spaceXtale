import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage/HomePageRockets.module.css";

const HomePageRockets = () => {
  return (
    <div className={styles.main + " bg-overlay"}>
      <div className="homepage__content">
        <p className="homepage__header">Rockets</p>
        <p className="homepage__subheader">
          Rockets are Cool. Theres no getting around that.
        </p>
        <p className="homepage__subtitle">-Elon Musk</p>
        <Link to="/rockets" className={styles.rockets__button + " btn"}>
          Explore All Rockets
        </Link>
      </div>
    </div>
  );
};

export default HomePageRockets;
