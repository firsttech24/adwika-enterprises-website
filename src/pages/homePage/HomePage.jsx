import React from "react";
import styles from "./homePage.module.css";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      {/* hero section */}
      <Hero />

      {/* about section */}
      <About />
    </div>
  );
}
