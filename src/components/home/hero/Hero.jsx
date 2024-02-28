import React from "react";
import styles from "./hero.module.css";
import HeroSlide from "./heroSlide/HeroSlide";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.slideContainer}>
        <div className={styles.slideParent}>
          <HeroSlide />
        </div>
        <div className={styles.extraDiv}></div>
      </div>

      <div className={styles.hoverContainer}>
        <h1>LIVE THE BEST OF YOUR INTERIOR</h1>
        <button>DISCOVER NOW</button>
        <div className={styles.ctaContainer}>
          <div className={styles.cta}></div>
        </div>
      </div>
    </section>
  );
}
