import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [launchesPast, setLaunchesPast] = useState(null);
  const [launchesUpcoming, setLaunchesUpcoming] = useState(null);
  const [rockets, setRockets] = useState(null);
  const [starman, setStarman] = useState(null);

  useEffect(() => {
    (async () => {
      const lpResponse = await fetch(
        "https://api.spacexdata.com/v5/launches/past"
      );
      const lpData = await lpResponse.json();

      const luResponse = await fetch(
        "https://api.spacexdata.com/v5/launches/upcoming"
      );
      const luData = await luResponse.json();

      const rData = await (
        await fetch("https://api.spacexdata.com/v4/rockets")
      ).json();

      const starResponse = await fetch(
        "https://api.spacexdata.com/v4/roadster/"
      );

      const starData = await starResponse.json();

      setLaunchesPast(lpData);
      setLaunchesUpcoming(luData);
      setRockets(rData);
      setStarman(starData);
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{ launchesPast, launchesUpcoming, rockets, starman }}
    >
      {children}
    </DataContext.Provider>
  );
};
