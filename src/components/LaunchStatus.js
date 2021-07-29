import React from "react";
import { ReactComponent as Success } from "../assets/success.svg";
import { ReactComponent as Recovered } from "../assets/recovered.svg";
import { ReactComponent as Reused } from "../assets/reused.svg";
import { ReactComponent as Failed } from "../assets/failed.svg";
import styles from "../styles/LaunchStatus.module.css";

const LaunchStatus = ({ success, fairings }) => (
  <div className={styles.main}>
    {success ? (
      <div className="toolTip">
        <Success />
        <div className="toolTipText">Success</div>
      </div>
    ) : (
      <div className="toolTip">
        <Failed />
        <div className="toolTipText">Failed</div>
      </div>
    )}
    {fairings && (
      <>
        {fairings.recovered && (
          <div className="toolTip">
            <Recovered />
            <div className="toolTipText">Recovered</div>
          </div>
        )}
        {fairings.reused && (
          <div className="toolTip">
            <Reused />
            <div className="toolTipText">Reused</div>
          </div>
        )}
      </>
    )}
  </div>
);

export default LaunchStatus;
