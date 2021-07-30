import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { launch_query } from "../queries";
import unixToLocal from "../utils/unixtolocal";
import LaunchStatus from "./LaunchStatus";
import ImageSlider from "./ImageSlider";
import { ReactComponent as Reddit } from "../assets/reddit.svg";
import { ReactComponent as Wikipedia } from "../assets/wikipedia.svg";
import { ReactComponent as Article } from "../assets/article.svg";
import { ReactComponent as Presskit } from "../assets/presskit.svg";

import styles from "../styles/Launch.module.css";

const Launch = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(launch_query(id)),
      });
      const result = await res.json();
      setData(result.docs[0]);
    })();
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className={styles.launch__hero}>
        <div>
          <p className={styles.launch__header}>
            {data.name}
            <span> #{data.flight_number}</span>
          </p>
          <p className={styles.launch__date}>{unixToLocal(data.date_unix)}</p>
          <p className={styles.launch__details}>{data.details}</p>
          <p className={styles.launch__rocket}>
            <span>Rocket : </span>
            <Link
              className={styles.launch__rocket__link}
              to={`/rocket/${data.rocket.id}`}
            >
              {data.rocket.name}
            </Link>
          </p>
          <p className={styles.launch__launchpad}>
            <span>Launchpad : </span>
            {data.launchpad.full_name}
          </p>
          <div className={styles.launch__status}>
            <span>Status:</span>
            <LaunchStatus success={data.success} fairings={data.fairings} />
          </div>
        </div>
        <div>
          <img src={data.links.patch.small} alt="Mission Patch" />
        </div>
      </div>
      {data.payloads.map((p, i) => {
        return <Payload key={p.id} data={p} index={i} />;
      })}
      <ImageSlider
        srcArr={data.links.flickr.small.concat(data.links.flickr.original)}
      />
      <div className={styles.launch__ships}>
        <div>Recovery Ships</div>
        <div className={styles.launch__ships__grid}>
          {data.ships.map((ship) => {
            return <Ship key={ship.id} data={ship} />;
          })}
        </div>
      </div>

      <div className={styles.youtubeWrapper}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${data.links.youtube_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <SocialLinks src={data.links} />
    </div>
  );
};

const Ship = ({ data }) => (
  <div className={styles.launch__ship}>
    <div>
      <img src={data.image} alt="Recovery Ship" />{" "}
    </div>
    <div>
      <p
        className={`status ${
          data.active ? "status__active" : "status__inactive"
        }`}
      >
        {data.name}
      </p>
      <p>
        <span>Launches : </span>
        {data.launches.length}
      </p>
      <p>
        <span>Type : </span>
        {data.type}
      </p>
    </div>
  </div>
);

const Payload = ({ data, index }) => (
  <div>
    <div className="bb__table">
      <p className="bb__table__header">Payload #{index + 1}</p>
      <div className="bb__table__row">
        <p>Name</p>
        <p>{data.name}</p>
      </div>
      <div className="bb__table__row">
        <p>Customer</p>
        <p>{data.customers.join(",")}</p>
      </div>
      <div className="bb__table__row">
        <p>Manufacturers</p>
        <p>{data.manufacturers.join(",")}</p>
      </div>
      <div className="bb__table__row">
        <p>Mass (kg)</p>
        <p>{data.mass_kg}</p>
      </div>
      <div className="bb__table__row">
        <p>Nationalities</p>
        <p>{data.nationalities.join(",")}</p>
      </div>
      <div className="bb__table__row">
        <p>Orbit</p>
        <p>{data.orbit}</p>
      </div>
      <div className="bb__table__row">
        <p>Type</p>
        <p>{data.type}</p>
      </div>
    </div>
  </div>
);

const SocialLinks = ({ src }) => (
  <div className="social__links__container">
    {src.reddit.campaign && (
      <a className="social__link" href={src.reddit.campaign}>
        <Reddit />
        Campaign
      </a>
    )}
    {src.reddit.launch && (
      <a className="social__link" href={src.reddit.launch}>
        <Reddit />
        Launch
      </a>
    )}
    {src.reddit.media && (
      <a className="social__link" href={src.reddit.media}>
        <Reddit />
        Media
      </a>
    )}
    {src.reddit.recovery && (
      <a className="social__link" href={src.reddit.recovery}>
        <Reddit />
        Recovery
      </a>
    )}
    {src.presskit && (
      <a href={src.presskit} className="social__link">
        <Presskit />
        Presskit
      </a>
    )}
    {src.article && (
      <a href={src.article} className="social__link">
        <Article />
        Article
      </a>
    )}
    {src.wikipedia && (
      <a href={src.wikipedia} className="social__link">
        <Wikipedia />
        Wikipedia
      </a>
    )}
  </div>
);

export default Launch;
