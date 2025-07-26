import React from "react";
// import { timeLine } from "../../timeLineData";
import styles from "./timeLine.module.css";
import { timeLine } from "../../timeLineData.js";

export const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <div className={styles.timelineLine}></div>

      {timeLine.map((item, index) => (
        <div
          key={item.timeLineId}
          className={`${styles.timelineItem} ${
            index % 2 === 0 ? styles.right : styles.left
          }`}
        >
          <div className={styles.timelineYearWrapper}>
            <div className={styles.timelineYear}>{item.year}</div>
          </div>

          <div className={styles.timelineMarker}>
            <div className={styles.timelineArmLeft}></div>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineArmRight}></div>
          </div>

          <div className={styles.timelineContent}>
            {item.desc.map((desc, index) =>
              index === 0 ? (
                <p key={desc.descId} style={{ fontWeight: "600" }}>
                  {desc.text}
                </p>
              ) : (
                <ul key={desc.descId}>
                  <li>{desc.text}</li>
                </ul>
              )
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
