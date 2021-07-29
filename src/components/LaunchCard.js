import React from "react";
import { Link } from "react-router-dom";
import unixToLocal from "../utils/unixtolocal";
import LaunchStatus from "./LaunchStatus";
import styles from "../styles/LaunchCard.module.css";

const LaunchCard = ({ launchData }) => {
  return (
    <Link to={`/launch/${launchData.id}`} className={styles.launch__card}>
      <div>
        <div>
          <div className={styles.launch__card__name}>{launchData.name}</div>
          <div className={styles.launch__card__date}>
            {unixToLocal(launchData.date_unix)}
          </div>
          <div className={styles.launch__card__details}>
            {launchData.details}
          </div>
        </div>
        <div className={styles.launch__card__status}>
          <div>Status</div>
          <LaunchStatus
            success={launchData.success}
            fairings={launchData.fairings}
          />
        </div>
      </div>
      <div>
        <img
          className={styles.launch__card__patch}
          src={launchData.links.patch.small}
          alt="Mission Patch"
        />

        <div className={styles.launch__card__number}>
          #{launchData.flight_number}
        </div>
      </div>
    </Link>
  );
};

export default LaunchCard;
