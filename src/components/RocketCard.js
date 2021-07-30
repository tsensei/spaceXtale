import React from "react";
import { Link } from "react-router-dom";
import unixToLocal from "../utils/unixtolocal";
import styles from "../styles/RocketCard.module.css";

const RocketCard = ({ data }) => {
  return (
    <Link to={`/rocket/${data.id}`} className={styles.rocket__card}>
      <div className={styles.rocket__card__image}>
        <img src={data.flickr_images[0]} alt="Rocket" />
      </div>
      <div className={styles.rocket__card__data}>
        <div className={styles.rocket__card__description}>
          <p>{data.name}</p>
          <p>{data.description}</p>
        </div>
        <div className={styles.rocket__card__stats}>
          <table>
            <tbody>
              <tr>
                <td>First Flight</td>
                <td> : {unixToLocal(data.first_flight, 1, 1)}</td>
              </tr>
              <tr>
                <td>Stages</td>
                <td> : {data.stages}</td>
              </tr>
              <tr>
                <td>Boosters</td>
                <td> : {data.boosters}</td>
              </tr>
              <tr>
                <td>Cost Per Launch</td>
                <td> : ${data.cost_per_launch / 1000000}M</td>
              </tr>
              <tr>
                <td>Success Rate</td>
                <td> : {data.success_rate_pct} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
};

export default RocketCard;
