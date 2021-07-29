import React, { useCallback, useContext, useRef, useState } from "react";
import { DataContext } from "../providers/DataContext";
import LaunchCard from "./LaunchCard";
import styles from "../styles/Launches.module.css";

const Launches = () => {
  const page = useRef(1);
  const dataPerPage = 5;
  const { launchesPast, launchesUpcoming } = useContext(DataContext);
  console.log(launchesPast);
  const [launchesToShow, setLaunchesToShow] = useState(
    [...launchesPast].slice(1, dataPerPage + 1)
  );
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
      if (launchesToShow.length === launchesPast.length - 1) {
        return;
      }
      page.current = page.current + 1;
      setLaunchesToShow(() => {
        return launchesPast.slice(1, dataPerPage * page.current);
      });
    }
  };

  return (
    <div className="container">
      <p className={styles.launches__header}>LATEST LAUNCH</p>
      <LaunchCard launchData={launchesPast[0]} />
      <p className={styles.launches__header}>PAST LAUNCHES</p>
      {launchesToShow.map((i) => {
        return <LaunchCard key={i.flight_number} launchData={i} />;
      })}
      <div className="loader" ref={loader}>
        {launchesToShow.length !== launchesPast.length - 1 && (
          <h1>Load More</h1>
        )}
      </div>
    </div>
  );
};

export default Launches;
