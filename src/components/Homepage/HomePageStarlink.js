import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage/HomePageStarlink.module.css";

const HomePageStarlink = ({ starlinkLength }) => {
  return (
    <div className={styles.main + " bg-overlay"}>
      <div className="homepage__content">
        <p className="homepage__header">Starlink</p>
        <p className="homepage__subheader">
          Colossal constellation of {starlinkLength} low-orbit satellites to
          provide low latency, broadband internet system
        </p>
        <p>
          Detailed info about coordinates and motion of all starlink satellites
        </p>
        <p className="homepage__subtitle">Data Updated Hourly</p>
        <Link to="/starlink" className={styles.starlink__button + " btn"}>
          Explore Starlink
        </Link>
      </div>
    </div>
  );
};

export default HomePageStarlink;
