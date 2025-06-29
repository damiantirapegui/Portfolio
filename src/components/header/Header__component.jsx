import React from "react";
import styles from "./header.module.css";
import { Icon } from "../icons/Icon";

export const Header__component = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles["hamburger-container"]}>
          <Icon name="menu" size="2x" />
        </div>

        <div className={styles["theme-mode-container"]}>
          <Icon name="moon" size="2x" className={styles["theme-icon"]} />
        </div>
      </div>
    </header>
  );
};
