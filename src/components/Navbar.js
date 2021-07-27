import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={styles.nav__logo}>spaceXtale</div>
      <div className={`${styles.nav__main} ${active && styles.nav__active}`}>
        <NavLink
          to="/homepage"
          activeClassName={styles.nav__item__active}
          className={styles.nav__item}
        >
          Home
        </NavLink>
        <NavLink
          to="/launches"
          activeClassName={styles.nav__item__active}
          className={styles.nav__item}
        >
          Launches
        </NavLink>
        <NavLink
          to="/rockets"
          activeClassName={styles.nav__item__active}
          className={styles.nav__item}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/starlink"
          activeClassName={styles.nav__item__active}
          className={styles.nav__item}
        >
          Starlink
        </NavLink>
        <NavLink
          to="/roadster"
          activeClassName={styles.nav__item__active}
          className={styles.nav__item}
        >
          Roadster
        </NavLink>
        <NavLink
          to="/info"
          activeClassName={styles.nav__item__active}
          className={styles.nav__item}
        >
          Info
        </NavLink>
      </div>
      <button
        onClick={() => setActive((a) => !a)}
        className={styles.nav__toggler}
      >
        {!active ? (
          <svg
            id="Layer_1"
            style={{ enableBackground: "new 0 0 32 32" }}
            version="1.1"
            viewBox="0 0 32 32"
            fill="white"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        ) : (
          <svg
            fill="white"
            viewBox="0 0 329.26933 329"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        )}
      </button>
    </>
  );
};

export default Navbar;
