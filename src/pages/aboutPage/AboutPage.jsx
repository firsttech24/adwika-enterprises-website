/** @format */

import React from "react";
import styles from "./aboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      <div className={styles.firstRow}>
        <h1>WELCOME TO ADWIKA ENTERPRISES</h1>
        <p>
          Our goal is to provide excellence in all areas of interior design with
          an unparalleled level of service and quality no matter how big or
          small the project is.
        </p>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.leftSecond}>
          <h5>ABOUT ADWIKA ENTERPRISES</h5>
          <h2>COMMITTED TO SUPERIOR QUALITY AND RESULTS.</h2>
          <p>
            “Adwika Enterprises has been founded as an organization specializing
            in corporate, commercial, retail & hospitality interior work. Since
            the inception of our group in 2004, We have successfully executed
            several prestigious projects serving a highly discriminating
            clientele to their full satisfation. The firm has seen steady growth
            year over year.”
          </p>
          <p>
            Our firm is made up of dedicated professionals that all understand
            the importance of truly listening to our clients and responding to
            their needs. This, we believe, is the key to building a successful
            line of communication and a good relationship with those we are
            privileged to work for.
          </p>
          <button>
            <span>Read more</span>
            <span className={styles.arrow}>➡️</span>
          </button>
        </div>
        <div className={styles.rightSecond}>
          <img
            src="/webImages/about1.jpg"
            alt=""
          />
        </div>
      </div>
      <button>sdljfsdkf</button>
    </div>
  );
}
