import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage/HomePageStarlink.module.css";

const HomePageStarlink = () => {
  return (
    <div className={styles.main + " bg-overlay"}>
      <div className={styles.starlink__content}>
        <p>Starlink</p>
        <p>
          Colossal constellation of over 7000 low-orbit satellites to provide
          low latency, broadband internet system
        </p>
        <p>
          Detailed info about coordinates and motion of all starlink satellites
        </p>
        <p>Data Updated Hourly</p>
        <Link to="/starlink" className={styles.starlink__button + " btn"}>
          Explore Starlink
        </Link>
      </div>
    </div>
  );
};

export default HomePageStarlink;
