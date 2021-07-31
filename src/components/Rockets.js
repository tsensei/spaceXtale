import React, { useContext } from "react";
import { DataContext } from "../providers/DataContext";
import RocketCard from "./RocketCard";
import styles from "../styles/Rockets.module.css";

const Rockets = () => {
  const { rockets } = useContext(DataContext);

  return (
    <div className="container">
      <p className={styles.rockets__heading}>Rockets</p>
      {rockets.map((data) => {
        return <RocketCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Rockets;
