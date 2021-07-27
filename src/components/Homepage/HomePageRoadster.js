import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Homepage/HomePageRoadster.module.css";

const HomePageRoadster = ({ data }) => {
  const distance = data ? Math.round(data.earth_distance_km) : 0;
  return (
    <div className={styles.main + " bg-overlay"}>
      <div className={styles.roadster__content}>
        <p>Starman and his Roadster</p>
        <p>
          <span>{distance}</span> kms from the Earth and moving away
        </p>
        <Link to="/roadster" className={styles.roadster__button + " btn"}>
          Explore Roadster
        </Link>
      </div>
    </div>
  );
};

export default HomePageRoadster;
