import React from "react";
import styles from "./whatWeDo.module.css";
import { whatWeDoArr } from "../../../data/home/whatWeDo/whatWeDo";

export default function WhatWeDo() {
  return (
    <section className={styles.WhatWeDo}>
      <header>
        <p>Services</p>
        <h2>What do we offer ?</h2>
        <p>
          we are committed to provide the highest quality of construction
          services in as atmosphere of mutual trust and respect
        </p>
      </header>
      <main>
        {whatWeDoArr?.map((item, index) => (
          <div key={index} className={styles.serviceContainer}>
            <item.icon />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </main>
    </section>
  );
}
