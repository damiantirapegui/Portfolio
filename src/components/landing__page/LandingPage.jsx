import React from "react";
import styles from "./LandingPage.module.css";
import profilePicture from "../../assets/profile-picture.jpg";

export const LandingPage = () => {
  return (
    <section className={styles["landing-page"]}>
      <div className={styles["landing-page__content"]}>
        <div className={styles["hero-container"]}>
          <p className={styles["hero-text"]}>
            Hi, I'm{" "}
            <span className={styles["highlighted-words"]}>Jonathan</span> – a{" "}
            <span className={styles["highlighted-words"]}>
              fullstack developer
            </span>{" "}
            passionate about building clean,{" "}
            <span className={styles["highlighted-words"]}>responsive</span>, and{" "}
            <span className={styles["highlighted-words"]}>
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
