import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [launchesPast, setLaunchesPast] = useState(null);
  const [launchesUpcoming, setLaunchesUpcoming] = useState(null);
  const [rockets, setRockets] = useState(null);
  const [starman, setStarman] = useState(null);
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

      const starmanResponse = await fetch(
        "https://api.spacexdata.com/v4/roadster/"
      );

      const starmanData = await starmanResponse.json();

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

      setLaunchesPast(lpData.reverse());
      setLaunchesUpcoming(luData);
      setRockets(rData);
      setStarman(starmanData);
      setStarlinkLength(starlinkData.totalDocs);
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        launchesPast,
        launchesUpcoming,
        rockets,
        starman,
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
