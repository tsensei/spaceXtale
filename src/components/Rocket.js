import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../providers/DataContext";
import ImageSlider from "./ImageSlider";
import styles from "../styles/Rocket.module.css";

const Rocket = () => {
  const { rockets } = useContext(DataContext);
  const { id } = useParams();
  const [data] = useState(rockets.find((r) => r.id === id));
  console.log(data);

  return (
    <div className="container">
      <h1>{id}</h1>
      <ImageSlider srcArr={data.flickr_images} />
    </div>
  );
};

export default Rocket;
