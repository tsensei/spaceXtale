import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [launchesPast, setLaunchesPast] = useState(null);
  const [launchesUpcoming, setLaunchesUpcoming] = useState(null);
  const [rockets, setRockets] = useState(null);
  const [roadster, setRoadster] = useState(null);
  const [starlinkLength, setStarlinkLength] = useState(null);

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

      const roadsterResponse = await fetch(
        "https://api.spacexdata.com/v4/roadster/"
      );

      const roadsterData = await roadsterResponse.json();

      const starlinkQueryResponse = await fetch(
        "https://api.spacexdata.com/v4/starlink/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            options: {
              limit: "0",
            },
          }),
        }
      );

      const starlinkData = await starlinkQueryResponse.json();

      fetch("https://ancient-wildwood-93589.herokuapp.com/spaceXtale"); //Visitor Counter

      setLaunchesPast(lpData.reverse());
      setLaunchesUpcoming(luData);
      setRockets(rData);
      setRoadster(roadsterData);
      setStarlinkLength(starlinkData.totalDocs);
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        latestLaunch: launchesPast && launchesPast[0],
        allLaunchesPast: launchesPast, //All past launch
        launchesPast: launchesPast && launchesPast.slice(1), //Without the latest launch
        launchesUpcoming,
        rockets,
        roadster,
        starlinkLength,
        launchesAll:
          launchesPast && launchesUpcoming
            ? [...launchesPast, ...launchesUpcoming]
            : [],
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
