import React, { useEffect, useState } from "react";
import styles from "../styles/CountDown.module.css";

const CountDown = ({ target }) => {
  const [timeObject, setTimeObject] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getCountDownTime = (target) => {
    const timeNow = new Date().getTime() / 1000;
    const secondsLeft = target - timeNow < 0 ? 0 : target - timeNow;

    const days = secondsLeft / 86400;
    const hours = (secondsLeft / 3600) % 24;
    const minutes = (secondsLeft / 60) % 60;
    const seconds = secondsLeft % 60;

    return {
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    };
  };

  useEffect(() => {
    if (!target) return;
    const timer = setInterval(() => {
      setTimeObject(getCountDownTime(target));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [target]);

  return (
    <div className={styles.main}>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownUpper}>
          <div>T-</div>
          <div>{timeObject.days}</div>
          <div>{timeObject.hours}</div>
          <div>{timeObject.minutes}</div>
          <div>{timeObject.seconds}</div>
        </div>
        <div className={styles.countdownLower}>
          <div></div>
          <div>Days</div>
          <div>Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
