import React from "react";
import { NavLink } from "react-router-dom";
import routes from "./../../routes.js";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list__item}>
          <NavLink
            to={routes.home}
            exact
            className={styles.item_link}
            activeClassName={styles.active_item_link}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className={styles.item_link}
            activeClassName={styles.active_item_link}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
