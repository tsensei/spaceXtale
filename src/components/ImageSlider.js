import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
import styles from "../styles/ImageSlider.module.css";

const ImageSlider = ({ srcArr }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (operation) => {
    setIndex((index) => index + operation);
  };

  if (!srcArr.length) return null;

  return (
    <div className={styles.main}>
      <div className={styles.slider__container}>
        <img src={srcArr[index]} alt="Mission" />
        <div className={styles.slider__controls}>
          <div className={styles.slider__controls__buttons}>
            <div>
              {index !== 0 && (
                <button onClick={() => handleClick(-1)}>
                  <LeftArrow />
                </button>
              )}
            </div>
            <div>
              {index !== srcArr.length - 1 && (
                <button onClick={() => handleClick(1)}>
                  <RightArrow />
                </button>
              )}
            </div>
          </div>
          <div className={styles.slider__position__tracker}>
            {srcArr.map((src, i) => {
              return (
                <div
                  key={src}
                  className={`${styles.tracker__circle} ${
                    i === index
                      ? styles.circle__active
                      : styles.circle__inactive
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
