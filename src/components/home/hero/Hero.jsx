import React from "react";
import styles from "./hero.module.css";
import HeroSlide from "./heroSlide/HeroSlide";
import { Link } from "react-router-dom";
import { ctasArr } from "../../../data/home/hero/ctas";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.slideContainer}>
        {/* slide */}
        <div className={styles.slideParent}>
          <HeroSlide />
        </div>

        {/* hover container */}
        <div className={styles.hoverContainer}>
          <h1>
            LIVE THE BEST OF <br /> YOUR INTERIOR
          </h1>
          <Link to={"/services"}>
            <button className="btn1">DISCOVER NOW</button>
          </Link>
        </div>
      </div>

      {/* ctas */}
      <div className={styles.ctaContainer}>
        {ctasArr?.map((cta, index) => (
          <Link key={index} className={styles.cta}>
            <cta.icon />
            <strong>{cta.title}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
