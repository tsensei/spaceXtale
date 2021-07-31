import React, { useContext } from "react";
import HomePageHero from "./Homepage/HomePageHero";
import HomePageLaunches from "./Homepage/HomePageLaunches";
import HomePageRockets from "./Homepage/HomePageRockets";
import HomePageStarlink from "./Homepage/HomePageStarlink";
import HomePageRoadster from "./Homepage/HomePageRoadster";
import { DataContext } from "../providers/DataContext";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const { launchesUpcoming, allLaunchesPast, starman, starlinkLength } =
    useContext(DataContext);
  return (
    <div className={styles.main}>
      <HomePageHero upcomingLaunch={launchesUpcoming[0]} />
      <HomePageLaunches launchesPast={allLaunchesPast} />
      <HomePageRockets />
      <HomePageStarlink starlinkLength={starlinkLength} />
      <HomePageRoadster data={starman} />
    </div>
  );
};

export default HomePage;
