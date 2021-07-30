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
  const dataPerPage = 48;
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
      <select
        name="Query"
        onChange={handleSelect}
        className={styles.status__select}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <div className={styles.starlink__card__grid}>
        {starlinkData.map((data) => {
          return <StarlinkCard key={data.id} data={data} />;
        })}
      </div>
      <div ref={loader}>
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

const StarlinkCard = ({ data }) => (
  <div className={styles.starlink__card}>
    <p
      className={`status ${
        data.spaceTrack.DECAYED ? "status__inactive" : "status__active"
      }`}
    >
      {data.spaceTrack.OBJECT_NAME}
    </p>
    <p>Launch Date : {data.spaceTrack.LAUNCH_DATE}</p>
    <p>Period : {data.spaceTrack.PERIOD} minutes</p>
    <p>Total Revolutions : {data.spaceTrack.REV_AT_EPOCH}</p>
    <p>Updated: {unixToLocal(data.spaceTrack.EPOCH, 1)}</p>

    {data.spaceTrack.DECAYED ? (
      <>
        <p>Decay Date : {data.spaceTrack.DECAY_DATE}</p>
      </>
    ) : (
      <>
        <p>Height : {Math.trunc(data.height_km)} km</p>
        <p>Latitude : {data.latitude} </p>
        <p>Longitude : {data.longitude}</p>
      </>
    )}
  </div>
);

export default Starlink;
