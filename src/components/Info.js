import React from "react";
import styles from "../styles/Info.module.css";

const Info = () => {
  return (
    <div className="container">
      <p className={styles.info__header}>Info</p>
      <div className={styles.info__card}>
        <p>
          SpaceXtale is an open source web application for exploring data about{" "}
          <a href="https://www.spacex.com/">spaceX</a>'s activites .This site
          offers a countdown timer for the upcoming launch, data about all the
          past launches and upcoming launches. Detailed data about spaceX
          rockets are also available. The starlink page provides coordinates and
          motion info about starlink satellites in orbit, updated hourly.
        </p>
        <p>
          This website was developed and is maintained by{" "}
          <a href="https://www.instagram.com/_tsensei_/">Talha Jubair Siam</a>.
          Website built using React and Data Resource is fetched from an
          unofficial open-source api by{" "}
          <a href="https://github.com/r-spacex/SpaceX-API/">SpaceX-api</a>.
          Special thanks to everyone at spaceX for their incredible work and
          Jake Meyer for maintaining this api, without which this website
          wouldn't have been possible . The source code for this project can be
          found at my{" "}
          <a href="https://github.com/tsensei/spaceXtale/tree/main">
            Github Repository
          </a>
          .
        </p>
        <p>
          I, in no way, am associated with spaceX. The photos used are free to
          use and provided by{" "}
          <a href="https://www.flickr.com/photos/spacex/">SpaceX Flickr.</a>
        </p>
        <p>
          I am a MERN fullstack developer from Bangladesh learning web
          technologies and creating fun projects. I am open for paid projects
          and collaborations. DM{" "}
          <a href="https://www.instagram.com/_tsensei_/"> here</a> or send a
          <a href="mailto:talhasiam01@gmail.com"> mail</a> for enquiry. Have a
          good day and best of luck exploring the space and spaceX's glory .{" "}
        </p>
      </div>
    </div>
  );
};

export default Info;
