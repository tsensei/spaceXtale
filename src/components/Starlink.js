import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  starlink_query_all,
  starlink_query_active,
  starlink_query_inactive,
} from "../queries";
import unixToLocal from "../utils/unixtolocal";
import styles from "../styles/Starlink.module.css";
import Loading from "./Loading";

const Starlink = () => {
  const [page, setPage] = useState(1);
  const dataPerPage = 24;
  const [starlinkData, setStarlinkData] = useState(null);
  const [query, setQuery] = useState(() => starlink_query_all);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.spacexdata.com/v4/starlink/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query(0, dataPerPage)),
      });
      const result = await res.json();
      console.log(result);
      setStarlinkData(result.docs);
    })();
  }, [query]);

  useEffect(() => {
    if (page === 1) return;
    (async () => {
      const res = await fetch("https://api.spacexdata.com/v4/starlink/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query((page - 1) * dataPerPage, dataPerPage)),
      });
      const result = await res.json();
      console.log(result);
      setStarlinkData((d) => [...d, ...result.docs]);
    })();
  }, [page]);

  useEffect(() => {
    console.log(starlinkData);
  }, [starlinkData]);

  const loader = useCallback((node) => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(handleObserver, options);

    if (node) {
      observer.observe(node);
    }
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting) {
      setPage((p) => p + 1);
    }
  };

  const handleSelect = (event) => {
    const value = event.target.value;
    if (value === "all") {
      setQuery(() => starlink_query_all);
    } else if (value === "active") {
      setQuery(() => starlink_query_active);
    } else if (value === "inactive") {
      setQuery(() => starlink_query_inactive);
    }
  };

  if (!starlinkData) return <Loading />;

  return (
    <div className="container">
      <p className={styles.starlink__header}>Starlink</p>
      <div className={styles.starlink__select__header}>
        <div>
          <p>Satellite Data</p>
          <p>Updated Hourly</p>
        </div>
        <select
          name="Query"
          onChange={handleSelect}
          className={styles.status__select}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* <div className={styles.starlink__card__grid}> */}
      {starlinkData.map((data) => {
        return <StarlinkCard key={data.id} data={data} />;
      })}
      {/* </div> */}
      <div className="scroll__loader" ref={loader}>
        <p>Loading...</p>
      </div>
    </div>
  );
};

const StarlinkCard = ({ data }) => (
  <div className={styles.starlink__card}>
    <div className={styles.starlink__card__header}>
      <p
        className={`status ${
          data.spaceTrack.DECAYED ? "status__inactive" : "status__active"
        }`}
      >
        {data.spaceTrack.OBJECT_NAME}
      </p>
      <p>#{data.spaceTrack.OBJECT_ID}</p>
    </div>
    <div className={styles.starlink__card__data}>
      <div>
        <table className={styles.starlink__card__table}>
          <tbody>
            <tr>
              <td>Launched </td>
              <td>: {unixToLocal(data.spaceTrack.LAUNCH_DATE, 1, 1)}</td>
            </tr>
            <tr>
              <td>Period </td>
              <td>: {data.spaceTrack.PERIOD} minutes</td>
            </tr>
            <tr>
              <td>Revolution </td>
              <td>: {data.spaceTrack.REV_AT_EPOCH}</td>
            </tr>
            {data.spaceTrack.DECAYED ? (
              <tr>
                <td>Decayed</td>
                <td>: {unixToLocal(data.spaceTrack.DECAY_DATE, 1, 1)}</td>
              </tr>
            ) : null}
            <tr>
              <td>Updated </td>
              <td>: {unixToLocal(data.spaceTrack.EPOCH, 1)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {!data.spaceTrack.DECAYED && (
          <table className={styles.starlink__card__table}>
            <tbody>
              <tr>
                <td>Height </td>
                <td>: {Math.trunc(data.height_km)} km</td>
              </tr>
              <tr>
                <td>Latitude </td>
                <td>: {data.latitude.toFixed(5)}</td>
              </tr>
              <tr>
                <td>Longitude </td>
                <td>: {data.longitude.toFixed(8)}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  </div>
);

export default Starlink;
