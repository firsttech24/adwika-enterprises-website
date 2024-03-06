import React from "react";
import styles from "./portfolio.module.css";
import { portfolioArr } from "../../../data/home/portfolio/portfolio";

export default function Portfolio() {
  return (
    <section className={styles.Portfolio}>
      <h1>
        OUR <span>PROJECTS</span>
      </h1>

      <div className={styles.eventContainer}>
        {portfolioArr?.map((item, index) => (
          <div className={styles.parentEvent}>
            {item?.map((item2, index2) => (
              <div className={styles[item2.class]} key={index2}>
                {console.log("item2", item2)}
                <div className={styles.imgContainer}>
                  <img src={item2.img} alt="event" />
                </div>
                <div className={styles.content}>
                  <h2>{item2.title}</h2>
                  <p>description...</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button>SEE ALL</button>
    </section>
  );
}
