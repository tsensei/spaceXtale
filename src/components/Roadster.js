import React, { useContext } from "react";
import { DataContext } from "../providers/DataContext";
import ImageSlider from "./ImageSlider";
import { TableRow } from "./Rocket";
import { ReactComponent as Wikipedia } from "../assets/wikipedia.svg";
import unixToLocal from "../utils/unixtolocal";
import styles from "../styles/Roadster.module.css";

const Roadster = () => {
  const { roadster } = useContext(DataContext);
  console.log(roadster);
  return (
    <div className="container">
      <div className={styles.roadster__description}>
        <p>{roadster.name}</p>
        <p>Launched:{unixToLocal(roadster.launch_date_unix)}</p>
        <p>{roadster.details}</p>
      </div>
      <div className="bb__table">
        <p className="bb__table__header">Stats</p>
        <TableRow
          title="Speed"
          content={`${Math.trunc(roadster.speed_kph)} kmph`}
        />
        <TableRow
          title="Distance from Earth"
          content={`${Math.trunc(roadster.earth_distance_km)} km`}
        />
        <TableRow
          title="Distance from Mars"
          content={`${Math.trunc(roadster.mars_distance_km)} km`}
        />
        <TableRow
          title="Period"
          content={`${roadster.period_days.toFixed(4)} days`}
        />
        <TableRow title="Mass" content={`${roadster.launch_mass_kg} kg`} />
        <TableRow title="Orbit Type" content={roadster.orbit_type} />
        <TableRow title="Longitude" content={roadster.longitude.toFixed(4)} />
        <TableRow
          title="Apoapsis"
          content={`${roadster.apoapsis_au.toFixed(4)} AU`}
        />
        <TableRow
          title="Periapsis"
          content={`${roadster.periapsis_au.toFixed(4)} AU`}
        />
        <TableRow
          title="Semi Major Axis"
          content={`${roadster.semi_major_axis_au.toFixed(4)} AU`}
        />
        <TableRow
          title="Eccentricity"
          content={roadster.eccentricity.toFixed(6)}
        />
        <TableRow
          title="Inclination"
          content={roadster.inclination.toFixed(6)}
        />
        <TableRow
          title="Argument of Periapsis"
          content={roadster.periapsis_arg.toFixed(4)}
        />
      </div>
      <ImageSlider srcArr={roadster.flickr_images} />
      <div className="youtubeWrapper">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${roadster.video
            .split("/")
            .pop()}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="social__links__container">
        <a className="social__link" href={roadster.wikipedia}>
          <Wikipedia />
          Wikipedia
        </a>
      </div>
    </div>
  );
};

export default Roadster;
