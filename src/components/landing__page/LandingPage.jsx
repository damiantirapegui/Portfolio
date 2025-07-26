import React from "react";
import styles from "./LandingPage.module.css";
import profilePicture from "../../assets/profile-picture.jpg";
import "../../index.css"; // Import global styles

export const LandingPage = ({ isDarkMode }) => {
  return (
    <section className={styles["landing-page"]}>
      <div className={styles["landing-page__content"]}>
        <div className={styles["hero-container"]}>
          <p className={styles["hero-text"]}>
            Hi, I'm{" "}
            <span
              className={
                !isDarkMode
                  ? "highlighted-words"
                  : "highlighted-words-dark-mode"
              }
            >
              Jonathan
            </span>{" "}
            – a{" "}
            <span
              className={
                !isDarkMode
                  ? "highlighted-words"
                  : "highlighted-words-dark-mode"
              }
            >
              fullstack developer
            </span>{" "}
            passionate about building clean,{" "}
            <span
              className={
                !isDarkMode
                  ? "highlighted-words"
                  : "highlighted-words-dark-mode"
              }
            >
              responsive
            </span>
            , and{" "}
            <span
              className={
                !isDarkMode
                  ? "highlighted-words"
                  : "highlighted-words-dark-mode"
              }
            >
              user-focused web apps
            </span>
            . Scroll down to see my timeline.
          </p>
        </div>

        <div className={styles["profile-picture-container"]}>
          <img
            src={profilePicture}
            alt="Jonathan"
            className={styles["profile-picture"]}
          />
        </div>
      </div>
    </section>
  );
};
