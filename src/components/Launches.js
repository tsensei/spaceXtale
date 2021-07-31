import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DataContext } from "../providers/DataContext";
import LaunchCard from "./LaunchCard";
import styles from "../styles/Launches.module.css";

const Launches = () => {
  const [page, setPage] = useState(1);
  const dataPerPage = 5;
  const { launchesPast, launchesUpcoming, latestLaunch } =
    useContext(DataContext);
  const [launchFilter, setLaunchFilter] = useState("past");
  const [launchData, setLaunchData] = useState(launchesPast); //Store for past/upcoming launch
  const [launchesToShow, setLaunchesToShow] = useState(
    launchData.slice(0, dataPerPage * page)
  );
  console.log(launchesPast);
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
      console.log("[observing]");
      observer.observe(node);
    }
  }, []);

  useEffect(() => {
    if (launchFilter === "past") {
      setLaunchData(launchesPast);
    } else if (launchFilter === "upcoming") {
      setLaunchData(launchesUpcoming);
    }
  }, [launchFilter]);

  useEffect(() => {
    setLaunchesToShow(launchData.slice(0, dataPerPage * page));
  }, [launchData, page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((p) => p + 1);
    }
  };

  const handleSelect = (e) => {
    setPage(1);
    setLaunchFilter(e.target.value);
  };

  return (
    <div className="container">
      <p className={styles.launches__header}>LATEST LAUNCH</p>
      <LaunchCard launchData={latestLaunch} />
      <div className={styles.launches__header}>
        <p>{launchFilter === "past" ? "Past" : "Upcoming"} Launches</p>
        <select name="Set Launch" className="select" onChange={handleSelect}>
          <option defaultValue value="past">
            Past
          </option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      {launchesToShow.map((i) => {
        return <LaunchCard key={i.flight_number} launchData={i} />;
      })}
      <div className="loader" ref={loader}>
        {launchesToShow.length !== launchData.length && <h1>Load More</h1>}
      </div>
    </div>
  );
};

export default Launches;
